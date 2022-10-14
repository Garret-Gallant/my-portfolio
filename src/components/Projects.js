import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='border-2'>
        <h3>Yodish Translator</h3>
        <p>A Project in pure Javascript reliant on the funtranslations Yodish API</p>
      </div>
      <div>
        <h3>Haku Mele</h3>
        <p>A project focused around cataloguing music and expanding musical preferences, using React and JSON</p>
      </div>
      <div>
        <h3>Basic Card Game</h3>
        <p>A project built in a week to emulate Hearthstone basic gameplay, using React and Rails</p>
      </div>
      <div>
        <h3>StackOverflat</h3>
        <p>A forum which utilizes a Rails custom backend and React frontend to host user accounts and catalogue user posts</p>
      </div>
      <div>
        <h3>Bandmate</h3>
        <p>A project which uses Rails, React, Active Storage, and BCrypt to host user accounts, allow audio file uploads, and give users an opportunity to browse and find bandmates</p>
      </div>
    </div>
  )
}

export default Projects

