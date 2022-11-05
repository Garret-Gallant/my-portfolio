import React from "react";

const Home = () => {
  const width = window.innerWidth;
  const breakpoint = 650;

  return (
    <div className="text-center bg-[url('./assets/background.gif')] h-screen text-white flex flex-col items-center pt-10">
      <h4 className="relative text-2xl font-bold">
        Welcome to Garret Gallant's Portfolio
      </h4>
      <img
        src="home.jpg"
        className="relative h-1/3 mt-10 border-double border-8 border-slate-500 rounded-full"
        alt="headshot"
      />
      <p className="font-bold text-xl mt-10">
        Garret is a Full-Stack Developer from Denver, CO with a passion for
        innovation.
      </p>
      <p className="font-bold text-xl mt-5">
        If you want to learn more, feel free to visit the about page.
      </p>
      <img src="./techs.png" className="mt-10 md:w-2/3 sm:w-90" alt="technologies"/>
    </div>
  );
};

export default Home;
