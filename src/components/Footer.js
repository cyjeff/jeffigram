import "./footer.css";
import cam from "./camera.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="camIcon">
        <img className="camImg" alt="cam" src={cam} />
      </div>
    </div>
  );
}

export default Footer;
