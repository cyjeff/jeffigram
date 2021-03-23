import "./footer.css";
import cam from "./camera.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="camIcon">
        <img className="camImg" alt="cam" src={cam} />
        <input type="file"></input>
      </div>
    </div>
  );
}

export default Footer;
