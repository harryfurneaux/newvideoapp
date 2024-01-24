import { useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
const LinkedInAuth = () => {
  function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
  }
  const query = useQuery();
  const { setShowLoading } = useAuth();

  useEffect(() => {
    setShowLoading(true);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/auth/linkedin/callback", {
        params: {
          code: query.get("code"),
          state: query.get("state"),
        },
      })
      .then((res) => {})
      .finally(() => {
        setShowLoading(false);
      });
  }, []);

  return <p>redirecting.......</p>;
};

export default LinkedInAuth;
