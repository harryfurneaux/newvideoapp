import Icons from "../icons";
import { useMediaQuery } from 'react-responsive'

const BackMenu = ({
  showScreen,
  setShowScreen,
  showRightMenu,
  setShowRightMenu,
}: {
  showScreen: number;
  setShowScreen: any;
  showRightMenu?: any;
  setShowRightMenu?: any;
}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1013px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  return (
    <div className={`leftSideHeader ${showScreen == 5 && isMobile ? "jdafk-aewkmw" : ""}`}>
      <div
        onClick={() => {
          if (showScreen == 1) {
            setShowScreen(0);
          } else if (showScreen == 2) {
            setShowScreen(1);
          } else if (showScreen == 3) {
            setShowScreen(2);
          } else if (showScreen == 4) {
            setShowScreen(3);
          } else if (showScreen == 5) {
            setShowScreen(4);
          } else if (showScreen == 6) {
            setShowScreen(5);
          } else if (showScreen == 7) {
            setShowScreen(6);
          }
        }}
        className="backButtonDiv"
      >
        <button className="hkjndankad-dnsd">
          <Icons iconNumber={29} />
        </button>
        <h5 className="mksaldkamaw-jdwa">Back</h5>
      </div>
      <div className="d-flex">
        {showScreen <= 5 ? (
          <button className="njkljmdasp-dawm">
            <Icons iconNumber={30} />
            Full Screen
          </button>
        ) : (
          <></>
        )}
        {
          isTabletOrMobile && showScreen == 6 ?
            <button
              onClick={() => {
                setShowRightMenu(!showRightMenu)
              }}
              className={`kjlma0o-dwa ${showRightMenu ? "sdsds" : ""}`}
            >
              <Icons iconNumber={61} />
              Options{" "}
            </button>
            : <button
              onClick={() => {
                setShowScreen(1);
              }}
              className="kjlma0o-dwa jksdalfj-jasidm"
            >
              <Icons iconNumber={30} />
              Create{" "}
            </button>
        }
      </div>
    </div>
  );
};
export default BackMenu