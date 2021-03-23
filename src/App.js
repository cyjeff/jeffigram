import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { useEffect, useState } from "react";

function App() {
  const [posts, SetPosts] = useState([1, 2, 3]);
  useEffect(() => {
    async function fetchdata() {
      const data = await fetch("/posts");
      const parse = await data.json();
      SetPosts(parse);
    }
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="headblock"></div>
      {posts.map((item) => {
        return <Post photo={item} key={item.id} />;
      })}
      <div className="footblock"></div>
      <Footer />
    </div>
  );
}

export default App;
