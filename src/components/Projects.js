import React from 'react'
import { Carousel } from 'flowbite-react'

const Projects = () => {
  return (
    <div className="relative h-screen">
      <Carousel>
      <div className="text-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <h2>Yodish Translator</h2>
        <br />
        <p>A Project in pure Javascript reliant on the funtranslations Yodish API</p>
      </div>
      <div className="text-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <h2>Haku Mele</h2>
        <br />
        <p>A project focused around cataloguing music and expanding musical preferences, using React and JSON</p>
      </div>
      <div className="text-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <h3>Card Game</h3>
        <br />
        <p>A project built in a week to emulate Hearthstone basic gameplay, using React and Rails</p>
      </div>
      <div className="text-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <h3>StackOverflat</h3>
        <br />
        <p>A forum which utilizes a Rails custom backend and React frontend to host user accounts and catalogue user posts</p>
      </div>
      <div className="text-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
        <h3>Bandmate</h3>
        <br />
        <p>A project which uses Rails, React, Active Storage, and BCrypt to host user accounts, allow audio file uploads, and give users an opportunity to browse and find bandmates</p>
      </div>
      </Carousel>
    </div>
  )
}

export default Projects

