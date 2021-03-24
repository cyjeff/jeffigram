import "./footer.css";
import cam from "./camera.png";
import { useRef } from "react";

function Footer({ submitFlag, SetSubmitFlag }) {
  const button = useRef(null);

  async function upload(e) {
    if (!e.target.files.length) return;
    const file = e.target.files[0];

    // upload file
    await fetch(
      `https://storage.googleapis.com/upload/storage/v1/b/jeffigram/o?uploadType=media&name=${file.name}`,
      {
        method: "POST",
        body: file,
      }
    );

    // query for current upload URL
    const URL = await fetch(
      `https://storage.googleapis.com/storage/v1/b/jeffigram/o/${file.name}?fields=mediaLink`
    );
    const parsedURL = await URL.json();
    const photoUrl = parsedURL.mediaLink;

    // add entry to DB
    const data = { user: "cyjeff", photo_url: photoUrl };
    await fetch("/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // clean up input and refresh posts
    e.target.value = "";
    SetSubmitFlag(!submitFlag);
  }

  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="camIcon">
        <img
          className="camImg"
          alt="cam"
          src={cam}
          onClick={() => {
            button.current.click();
          }}
        />
        <input id="inputBtn" type="file" ref={button} onChange={upload}></input>
      </div>
    </div>
  );
}

export default Footer;
