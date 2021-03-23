import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [posts, SetPosts] = useState("here");
  //const [photos, SetPhotos] = useState("photo placeholder");
  useEffect(() => {
    async function fetchdata() {
      const data = await fetch("/posts");
      const parse = await data.json();
      SetPosts(JSON.stringify(parse));
    }
    fetchdata();
  }, []);
  useEffect(() => {
    async function fetchPhoto() {}
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <Header />
      <header className="App-header">{posts}</header>
      <div>Photo</div>
      <img
        src="https://storage.googleapis.com/download/storage/v1/b/jeffigram/o/DCE9838B-7CBF-4F0B-9E11-40B9889A2588_1_105_c.jpeg?generation=1616390550076602&alt=media"
        alt="test"
      ></img>
      <img
        src="https://storage.googleapis.com/download/storage/v1/b/jeffigram/o/DCE9838B-7CBF-4F0B-9E11-40B9889A2588_1_105_c.jpeg?generation=1616390550076602&alt=media"
        alt="test"
      ></img>
      <img
        src="https://storage.googleapis.com/download/storage/v1/b/jeffigram/o/DCE9838B-7CBF-4F0B-9E11-40B9889A2588_1_105_c.jpeg?generation=1616390550076602&alt=media"
        alt="test"
      ></img>
    </div>
  );
}

export default App;
