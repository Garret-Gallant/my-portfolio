import React from 'react'
import { Button } from 'flowbite-react'
import { Carousel } from 'flowbite-react'

const Projects = () => {
  return (
    <div className="relative min-h-screen min-w-screen bg-[url('./assets/background.gif')] p-20">
    <div className="relative h-screen border-slate-500 border-2">
      <Carousel>
      <div className="text-center h-full text-white">
        <h2 className='text-2xl'>Yodish Translator</h2>
        <br />
        <p className='font-bold'>The first Program I ever wrote to the DOM, uses the funtranslations Yodish API</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./bm1.png' className='w-1/4'/>
          <img src='./bm3.png' className='w-1/4'/>
          <img src='./bm4.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-10'href='https://yoda-text.netlify.app/' target='_blank'>
            <Button color='dark'>Live Demo</Button>
          </a>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/yoda-speak-translator' target='_blank'>
            <Button color='dark'>Github Source Code</Button>
          </a>
        </div>
      </div>
      <div className="text-center h-full text-white">
        <h2 className='text-2xl'>Haku Mele</h2>
        <br />
        <p className='font-bold'>A project focused around cataloguing music and expanding musical preferences, using React and JSON</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./bm1.png' className='w-1/4'/>
          <img src='./bm3.png' className='w-1/4'/>
          <img src='./bm4.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-10'href='https://www.loom.com/share/00b29a32fdcb43439f10006f9e49576a' target='_blank'>
            <Button color='dark'>Video Demo</Button>
          </a>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/bandmate-mono-repo' target='_blank'>
            <Button color='dark'>Github Source Code</Button>
          </a>
        </div>
      </div>
      <div className="text-center h-full text-white">
        <h3 className='text-2xl'>Card Game</h3>
        <br />
        <p className='font-bold'>A project built in a week to emulate Hearthstone basic gameplay, using React and Rails</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./bm1.png' className='w-1/4'/>
          <img src='./bm3.png' className='w-1/4'/>
          <img src='./bm4.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-10'href='https://www.loom.com/share/00b29a32fdcb43439f10006f9e49576a' target='_blank'>
            <Button color='dark'>Video Demo</Button>
          </a>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/bandmate-mono-repo' target='_blank'>
            <Button color='dark'>Github Source Code</Button>
          </a>
        </div>
      </div>
      <div className="text-center h-full text-white">
        <h3 className='text-2xl'>StackOverflat</h3>
        <br />
        <p className='font-bold'>A forum which utilizes a Rails custom backend and React frontend to host user accounts and catalogue user posts</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./bm1.png' className='w-1/4'/>
          <img src='./bm3.png' className='w-1/4'/>
          <img src='./bm4.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-10'href='https://www.loom.com/share/00b29a32fdcb43439f10006f9e49576a' target='_blank'>
            <Button color='dark'>Video Demo</Button>
          </a>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/bandmate-mono-repo' target='_blank'>
            <Button color='dark'>Github Source Code</Button>
          </a>
        </div>
      </div>
      <div className="text-center h-full text-white">
        <h3 className='text-2xl'>Bandmate</h3>
        <br />
        <p className='font-bold'>A project which uses Rails, React, Active Storage, and BCrypt to host user accounts, allow audio file uploads, and give users an opportunity to browse and find bandmates</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./bm1.png' className='w-1/4'/>
          <img src='./bm3.png' className='w-1/4'/>
          <img src='./bm4.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-10'href='https://www.loom.com/share/00b29a32fdcb43439f10006f9e49576a' target='_blank'>
            <Button color='dark'>Video Demo</Button>
          </a>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/bandmate-mono-repo' target='_blank'>
            <Button color='dark'>Github Source Code</Button>
          </a>
        </div>
      </div>
      </Carousel>
    </div>
    </div>
  )
}

export default Projects

