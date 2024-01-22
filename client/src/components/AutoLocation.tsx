import React, { useState, useEffect, useRef } from "react";

let autoComplete: any;

function AutoLocation(props: any) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  const loadScript = (url: string, callback: any) => {
    let script: any = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoad(
    updateQuery: any,
    autoCompleteRef: React.RefObject<HTMLInputElement>
  ) {
    autoComplete = new (window as any).google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"] }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }

  async function handlePlaceSelect(updateQuery: any) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    props.setLocation(query);
  }

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  useEffect(() => {
    if (props.currentLocation != "null") {
      setQuery(props.currentLocation);
    }
  }, [props]);

  return (
    <input
      className="settingsInput w-100 text-white inputClss"
      name="Location"
      type="text"
      ref={autoCompleteRef}
      onChange={(event) => {
        setQuery(event.target.value);
      }}
      placeholder="LA."
      value={query}
    />
  );
}

export default AutoLocation;
