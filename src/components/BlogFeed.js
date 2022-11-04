import React from "react";

const BlogFeed = () => {
  const blogLink = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@GarretGallant"
  
  const feedFetch = () => {
    fetch(blogLink)
    
  }

  return (
    <div className="h-screen bg-[url('./assets/background.gif')]">
      <div>This Page is currently under construction, and will be up soon!</div>
    </div>
  );
};

export default BlogFeed;
