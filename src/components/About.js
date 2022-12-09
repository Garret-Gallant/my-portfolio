import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[url('./assets/background.gif')] bg-repeat sm:pt-5">
      <div class="text-center text-white md:flex justify-center">
        <div className="md:w-2/3 md:m-10 sm:m-5 sm:p-5 bg-gradient-to-b from-slate-500 to-transparent border-2 border-slate-800">
          <h1 class="font-bold">My Hobbies In Relation to Tech</h1>
          <br />
          <p>
            Around the age of 16 when I discovered guitar wasn't able to make
            the compositions I was looking for by itself, and learned drums,
            keyboard, and audio production alongside it.
            <br /> <br />
            Drawing parallels between different programming language usage and
            different instruments functions in a mix has developed strong coding
            habits and identifying the similarities between the two have
            certainly benefitted my ability to write clean and efficient code.
          </p>
          <br />
          <p>
            Outside of music I've been a skater and BMX Rider for quite a few
            years, and it's how I get exposure to the sun as a programmer! The
            ability to get up from a hard fall and try again has certainly
            carried over to programming.
            <br /> <br />I find the same habits I employ when learning a new
            trick on my board have led to a keen ability to learn new
            programming concepts quickly.
          </p>
        </div>
        <br />
        <div className="md:w-2/3 bg-gradient-to-b from-slate-500 to-transparent border-2 border-slate-800 md:m-10 sm:m-5 sm:p-5">
          <h2 class="font-bold">My Education</h2>
          <br />
          <p>
            I first began my higher education at MSU Denver, I was already
            driven and interested in computer science and spent 2 years at MSU
            developing my knowledge while strengthening the interest I had prior
            to working in depth with computers. We did a bit of coding, but not
            much, mostly small 200-300 line programs in Java. We also wrote
            programs in machine language and compiled them to basic hardware
            machines. I wrote small games in assembly, and programmed ALU's
            wioth 8-bit binary.
            <br /> <br />
            It was infatuating to have a medium to converse with a piece of
            hardware. It felt like translating code into something physical in
            the real world that could actually do something. I loved it; and
            after 2 years at MSU I decided to step away and focus primarily on
            my education in software engineering. After graduating Flatiron
            School, I hope to get a job in software engineering and revisit
            college to finish my degree another day.
          </p>
        </div>
        <br />
        <div className="md:w-2/3 bg-gradient-to-b from-slate-500 to-transparent border-2 border-slate-800 md:m-10 sm:m-5 sm:p-5 sm:mb-20">
          <h2 class="font-bold">My Goals</h2>
          <br />
          <p>
            My goals at this point forward remain the same as most engineers I
            would imagine. I intend to constantly learn and develop my skills in
            the field, while continuing to build more and more passion for what
            I do as my toolkit expands.
            <br /> <br />
            I look forward to every opportunity as a learning experience, a
            chance to self-reflect and improve myself. As I move forward in the
            industry I want to continue pushing towards making hardware and
            physical machines that utilize code and software logic to translate
            virtual ideas into reality.
            <br /> <br />
            While it's ambitious, I genuinely believe that there are hundreds of
            thousands of ideas that have yet to be realized that could be
            life-changing for millions. I want to be involved in that
            innovation, even if it's minimal on my part.
          </p>
        </div>
      </div>
      <div className="md:flex md:gap-40 md:justify-center">
        <img src="./skating.JPG" className="border-2 md:w-90 md:h-80 md:p-5" alt="Garret Skating"/>
        <img src="./guitar.jpg" className="border-2 md:w-90 md:h-80 md:p-5" alt="Garret Playing Guitar"/>
        <img src="./goals.jpg" className="border-2 md:w-90 md:h-80 md:p-5" alt="Garret Headshot"/>
      </div>
    </div>
  );
};

export default About;