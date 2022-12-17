import React from 'react'

const BlogList = ( {item} ) => {
  const {title, pubDate, link, guid, author, thumbnail, description} = item
  console.log(item)

  return (
    <div className="bg-[url('./assets/background.gif')] bg-repeat p-5 flex flex-grid">
      <a href={link} target="_blank">
      <div className="w-80 bg-gradient-to-b from-slate-500 to-transparent border-2 border-slate-800">
        <h2 className="text-white text-center p-5">{title}</h2>
        <p className="text-center text-white">{pubDate}</p>
      </div>
      </a>
    </div>
  )
}

export default BlogList