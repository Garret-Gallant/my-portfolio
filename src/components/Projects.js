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
          <img src='./yt1.png' className='w-1/4'/>
          <img src='./yt2.png' className='w-1/4'/>
          <img src='./yt3.png' className='w-1/4'/>
          <p class='fixed w-1/3 text-center top-1/3 mt-20'>
            The site is minimal, however the fact that it was my first ever application that got rendered to a page and everything functioned as intended was gratifying,
            I was so thrilled when we got it up, and while I struggled to get a few of the more simplistic features built, I learned so much about how
            code is written, and how different functions make things happen within applications. It was also a pleasure to work with a strong team of
            fellow learners so early into my software career.
          </p>
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
          <img src='./hm1.png' className='w-1/4'/>
          <img src='./hm2.png' className='w-1/4'/>
          <img src='./hm3.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-10'href='https://haku-mele.netlify.app/random-song' target='_blank'>
            <Button color='dark'>Live Demo</Button>
          </a>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/haku-mele-react-app' target='_blank'>
            <Button color='dark'>Github Source Code</Button>
          </a>
        </div>
      </div>
      <div className="text-center h-full text-white">
        <h3 className='text-2xl'>Card Game</h3>
        <br />
        <p className='font-bold'>A project built in a week to emulate Hearthstone basic gameplay, using React and Rails</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./cd1.png' className='w-1/4'/>
          <img src='./cd2.png' className='w-1/4'/>
          <img src='./cd3.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-20' href='https://github.com/Garret-Gallant/Phase-3-Project-Backend' target='_blank'>
            <Button color='dark'>Backend Source Code</Button>
          </a>
          <a className='fixed w-40 bottom-40' href='https://github.com/Garret-Gallant/Phase-3-Project-Backend' target='_blank'>
            <Button color='dark'>Frontend Source Code</Button>
          </a>
        </div>
      </div>
      <div className="text-center h-full text-white">
        <h3 className='text-2xl'>StackOverflat</h3>
        <br />
        <p className='font-bold'>A forum which utilizes a Rails custom backend and React frontend to host user accounts and catalogue user posts</p>
        <div className='flex gap-10 justify-center mt-10'>
          <img src='./so1.png' className='w-1/4'/>
          <img src='./so2.png' className='w-1/4'/>
          <img src='./so3.png' className='w-1/4'/>
          <a className='fixed w-40 bottom-20 m-5' href='https://github.com/Garret-Gallant/stackoverflat-mono-repo' target='_blank'>
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

