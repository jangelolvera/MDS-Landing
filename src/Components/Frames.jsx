import "../Styles/Frames.css";

export const Frames = () => {
  return (
    <>
      <div id="frameContainer">
        <div className="Frame" id="frame1"></div>

        <div className="Frame" id="frame2">
          <span className="cardsTxt">
           
            Experiencia en perforación y reparación de pozos
          </span>
        </div>

        <div className="Frame" id="frame3">
          <span className="cardsTxt">
            Trabajos de performance en direccional-barrenas
          </span>
        </div>

        <div className="Frame" id="frame4">
          <span id="cardsTxtBlack">
            Aplicación de tecnologías: RSS, LWD y giroscópicos
          </span>
        </div>

        <div className="Frame" id="frame5"></div>
      </div>
    </>
  );
};
