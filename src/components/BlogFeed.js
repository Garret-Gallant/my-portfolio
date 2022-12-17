import React from "react";
import { useState } from 'react'
import BlogList from './BlogList'

const BlogFeed = () => {
  // const blogLink = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@GarretGallant"
  // const [blogs, setBlogs] = useState([]);

  // const feedFetch = () => {
  // fetch(blogLink)
  //   .then((res) => res.json())
  //   .then((data) => setBlogs(data))
  // }

  return (
    <div className="h-screen bg-[url('./assets/background.gif')]">
      <div className="relative font-extrabold text-4xl text-center top-60 text-white">This Page is currently under construction, and will be up soon!</div>
    </div>
    // <div>
    //   {blogs.map((blog) => (
    //     <BlogList blog={blog} />
    //   ))}
    // </div>
  );
};

export default BlogFeed;
