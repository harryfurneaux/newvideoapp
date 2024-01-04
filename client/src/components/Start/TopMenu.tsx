import { useFullscreen } from "../../hooks/useFullscreen";
import { useMediaQuery } from 'react-responsive'

const TopMenu = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
  const { fullscreen, setFullscreen } = useFullscreen();

  return (
    <div className={`leftSideHeader ${isMobile ? "jdafk-aewkmw" : ""}`} style={{ position: 'absolute', top: 0, width: '100%', justifyContent: 'flex-end' }}>
      <div className="d-flex">
        <button className="njkljmdasp-dawm" onClick={() => {
          setFullscreen(!fullscreen);
        }}>
          <span style={{ fontSize: fullscreen ? 30 : 20, fontWeight: 400, marginRight: 5 }}>{fullscreen ? '-' : '+'}</span>
          Full Screen
        </button>
      </div>
    </div>
  );
};

export default TopMenu