import "./icon.css";
import Logoe from "./logo2.jpg";
export const LogoHere = () => {
  return (
    <>
      <div className="logo">
        <div className="logo-icon">
          <img
            src={Logoe}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div className="logo-name">
          <i> EPHMS </i>
        </div>
      </div>
    </>
  );
};
