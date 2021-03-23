import "./footer.css";
import cam from "./camera.png";

function Footer() {
  async function upload(e) {
    const file = e.target.files[0];
    await fetch(
      `https://storage.googleapis.com/upload/storage/v1/b/jeffigram/o?uploadType=media&name=${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );
  }
  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="camIcon">
        <img className="camImg" alt="cam" src={cam} />
        <input type="file" onChange={upload}></input>
      </div>
    </div>
  );
}

export default Footer;
