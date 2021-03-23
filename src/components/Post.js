import "./post.css";
import avatar from "./avatar.png";
import { useEffect, useState } from "react";

function Post({ photo }) {
  const [comments, SetComments] = useState([]);
  useEffect(() => {
    async function getdata() {
      const data = await fetch(`/comments/${photo.id}`);
      const parsed = await data.json();
      SetComments(parsed);
    }
    getdata();
  }, [photo.id]);
  return (
    <div className="container">
      <div className="postHead">
        <img className="avatar" src={avatar} alt="avatar"></img>
        <div className="avatar-text">{photo.user}</div>
      </div>
      <div>
        <img className="photo" src={photo.photo_url} alt={photo.id}></img>
      </div>
      {comments.map((item) => {
        return (
          <div className="comments" key={item.id}>
            <div className="comUser">{item.user}</div>
            <div>{item.text}</div>
          </div>
        );
      })}
      <div className="comment-input">
        <input
          className="comment-text"
          type="text"
          placeholder="Add comments"
        />
        <button className="comment-send">Send</button>
      </div>
    </div>
  );
}

export default Post;
