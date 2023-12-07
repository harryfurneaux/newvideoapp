import Icons from "../icons";

const BackButton = ({
    showScreen,
    setshowScreen,
  }: {
    showScreen: number;
    setshowScreen: any;
  }) => {
    return (
      <div
        onClick={() => {
          if (showScreen == 1) {
            setshowScreen(0);
          } else if (showScreen == 2) {
            setshowScreen(1);
          } else if (showScreen == 3 ) {
            setshowScreen(0);
          } else if (showScreen == 4 ) {
            setshowScreen(2);
          }
        }}
        className="skdmsa-dsad"
      >
        <button className="hkjndankad-dnsd">
          <Icons iconNumber={29} />
        </button>
        <h5 className="mksaldkamaw-jdwa">Back</h5>
      </div>
    );
  };

export default BackButton