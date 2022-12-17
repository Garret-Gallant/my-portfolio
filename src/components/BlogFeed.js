import React from "react";
import BlogList from './BlogList'

const BlogFeed = ( {blogs} ) => {
  const { items } = blogs
  console.log(items)

  return (
    // <div className="h-screen bg-[url('./assets/background.gif')]">
    //   <div className="relative font-extrabold text-4xl text-center top-60 text-white">This Page is currently under construction, and will be up soon!</div>
    // </div>
    <div>
      <p className="relative text-white text-center font-bold text-2xl w-1/3 left-1/3 m-5">This page is under construction, however clicking any box will bring you to that blog!!</p>
      <div className="flex flex-row justify-center">
        {items.map((item) => (
          <BlogList item={item} /> 
        ))}
      </div>
    </div>
  );
};

export default BlogFeed;
