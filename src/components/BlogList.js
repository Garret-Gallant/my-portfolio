import React from 'react'

const BlogList = ( {blog} ) => {
  console.log(blog.items)
  
  return (
    <div>{blog.name}</div>
  )
}

export default BlogList