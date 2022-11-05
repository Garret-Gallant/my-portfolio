import React from "react";
import { Carousel } from "flowbite-react";

const Projects = () => {
  return (
    <div className="relative min-h-screen w-screen bg-[url('./assets/background.gif')] p-20">
      <div className="relative h-screen sm:w-100 border-slate-500 md:pt-20 sm:pt-0">
        <Carousel slide={false} indicators={false}>
          <div className="text-center h-full top-2/3 text-white">
            <h2 className="text-4xl">Yodish Translator</h2>
            <br />
            <p className="font-bold">
              The first Program I ever wrote to the DOM, uses the
              funtranslations Yodish API
            </p>
            <div className="flex gap-10 justify-center mt-10">
              <img src="./yt1.png" className="w-1/4" alt="project-screenshot" />
              <img src="./yt2.png" className="w-1/4" alt="project-screenshot" />
              <img src="./yt3.png" className="w-1/4" alt="project-screenshot" />
            </div>
            <div className="flex gap-10 justify-center">
              <p class="w-2/3 mt-10">
                The site is minimal, however the fact that it was my first ever
                application that got rendered to a page and everything
                functioned as intended was gratifying, I was so thrilled when we
                got it up, and while I struggled to get a few of the more
                simplistic features built, I learned so much about how code is
                written, and how different functions make things happen within
                applications. It was also a pleasure to work with a strong team
                of fellow learners so early into my software career.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="w-40 mt-10"
                href="https://yoda-text.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Live Demo
                </button>
              </a>
              <a
                className="w-40 mt-10"
                href="https://github.com/Garret-Gallant/yoda-speak-translator"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Source Code
                </button>
              </a>
            </div>
          </div>

          <div className="text-center h-full top-2/3 text-white">
            <h2 className="text-4xl">Haku Mele</h2>
            <br />
            <p className="font-bold">
              A project focused around cataloguing music and expanding musical
              preferences, using React and JSON
            </p>
            <div className="flex gap-10 justify-center mt-10">
              <img src="./hm1.png" className="w-1/4" alt="project-screenshot" />
              <img src="./hm2.png" className="w-1/4" alt="project-screenshot" />
              <img src="./hm3.png" className="w-1/4" alt="project-screenshot" />
            </div>
            <div className="flex gap-10 justify-center">
              <p class="w-2/3 mt-10">
                This was the first frontend I built using react router, and
                complex CRUD functions to handle data coming to and from a
                database, at the time I was unable to make a proper backend so
                we hardcoded our data into a json file, and pulled it with fetch
                methods from there. I was thrilled with how this site turned out
                and I had an amazing time working with a group and speaking to
                other developers in a way that would fit the jargon of the
                field. Feel free to visit the site and add your favorite song!
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="w-40 mt-10"
                href="https://haku-mele.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Live Demo
                </button>
              </a>
              <a
                className="w-40 mt-10"
                href="https://github.com/Garret-Gallant/haku-mele-react-app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Source Code
                </button>
              </a>
            </div>
          </div>

          <div className="text-center h-full top-2/3 text-white">
            <h2 className="text-4xl">Card Game</h2>
            <br />
            <p className="font-bold">
              A project built in a week to emulate Hearthstone basic gameplay,
              using React and Rails
            </p>
            <div className="flex gap-10 justify-center mt-10">
              <img src="./cd1.png" className="w-1/4" alt="project-screenshot" />
              <img src="./cd2.png" className="w-1/4" alt="project-screenshot" />
              <img src="./cd3.png" className="w-1/4" alt="project-screenshot" />
            </div>
            <div className="flex gap-10 justify-center">
              <p class="w-2/3 mt-10">
                The development of this site used sinatra and ruby to run custom
                CRUD operations and while the frontend is barebones, it was a
                great deep dive into how HTTP servers are built and how they are
                communicating with the frontend at any given time. This site was
                also a great opportunity for me to teach some of my peers some
                things that I had learned that they hadn't yet. Being able to
                explain to someone how a particular piece of code is working
                really helped solidify my own knowledge.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="w-40 mt-10"
                href="https://github.com/Garret-Gallant/Phase-3-Project-Backend"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Backend Source Code
                </button>
              </a>
              <a
                className="w-40 mt-10"
                href="https://github.com/ZionMiller/phase-3-project-front-end-"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Frontend Source Code
                </button>
              </a>
            </div>
          </div>

          <div className="text-center h-full top-2/3 text-white">
            <h2 className="text-4xl">StackOverflat</h2>
            <br />
            <p className="font-bold">
              A forum which utilizes a Rails custom backend and React frontend
              to host user accounts and catalogue user posts.
            </p>
            <div className="flex gap-10 justify-center mt-10">
              <img src="./so1.png" className="w-1/4" alt="project-screenshot" />
              <img src="./so2.png" className="w-1/4" alt="project-screenshot" />
              <img src="./so3.png" className="w-1/4" alt="project-screenshot" />
            </div>
            <div className="flex gap-10 justify-center">
              <p class="w-2/3 mt-10">
                This site was one of the most challenging sites I built on a
                team during my time at Flatiron School. Once again the frontend
                is nothing too crazy, but using rails and cookies to handle user
                authentication was a challenging task that we overcame as a
                group. Since then, I have built better and more sophisticated
                user auth, but this starting point is the only reason that was
                ever a possibility to begin with, and I'm proud of the effort
                myself and my team put in to make it happen.
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="w-40 mt-10"
                href="https://github.com/Garret-Gallant/stackoverflat-mono-repo"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Source Code
                </button>
              </a>
            </div>
          </div>

          <div className="text-center h-full top-2/3 text-white">
            <h2 className="text-4xl">Bandmate</h2>
            <br />
            <p className="font-bold">
              A project which uses Rails, React, Active Storage, and BCrypt to
              host user accounts, allow audio file uploads, and give users an
              opportunity to browse and find bandmates
            </p>
            <div className="flex gap-10 justify-center mt-10">
              <img src="./bm1.png" className="w-1/4" alt="project-screenshot" />
              <img src="./bm3.png" className="w-1/4" alt="project-screenshot" />
              <img src="./bm4.png" className="w-1/4" alt="project-screenshot" />
            </div>
            <div className="flex gap-10 justify-center">
              <p class="md:w-2/3 md:mt-10 sm:text-md sm:px-20 sm:mt-5">
                Bandmate was created by me and me alone with the intention of
                using it as a tool to find bandmates. I implemented everything I
                had learned at Flatiron School, alongside new tech (ruby active
                storage to host audio files & websockets for a live user chat)
                in 2 weeks. Once I have the ability to purchase a domain and
                afford S3 I will definitely be putting this up on the AWS
                pipeline. Until then however I do have a video demo of the site
                in a beta version and would love for you to check it out!
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <a
                className="w-40 mt-10"
                href="https://www.loom.com/share/00b29a32fdcb43439f10006f9e49576a"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Video Demo
                </button>
              </a>
              <a
                className="w-40 mt-10"
                href="https://github.com/Garret-Gallant/bandmate-mono-repo"
                target="_blank"
                rel="noreferrer"
              >
                <button className="p-5 bg-slate-800 rounded-lg duration-300 hover:scale-105 hover:bg-slate-500">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
