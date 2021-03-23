import "./post.css";
import avatar from "./avatar.png";

function Post({ photo }) {
  return (
    <div className="container">
      <div className="postHead">
        <img className="avatar" src={avatar} alt="avatar"></img>
        <div className="avatar-text">{photo.user}</div>
      </div>
      <div>
        <img className="photo" src={photo.photo_url} alt={photo.id}></img>
      </div>
      <div className="comments">comments</div>
    </div>
  );
}

export default Post;
