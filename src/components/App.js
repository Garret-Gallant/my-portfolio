import "../index.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import BlogFeed from "./BlogFeed";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'

function App() {
  const blogLink = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@GarretGallant"
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  fetch(blogLink)
    .then((res) => res.json())
    .then((data) => setBlogs(data))
  }, [])
  
  return (
    <div className="bg-[url('./assets/background.gif')] bg-repeat">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogFeed blogs={blogs} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
