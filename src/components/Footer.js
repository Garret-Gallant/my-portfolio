import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row gap-4 p-5 bg-slate-600 justify-center min-w-screen h-20">
      <div className="sticky flex flex-col justify-center">
        <h1 class="text-white ml-10">Email: garret@gallantsoftware.dev</h1>
        <h1 class="text-white ml-10">Phone: 303-523-0283</h1>
      </div>
      <button href="https://github.com/Garret-Gallant" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="h-6 w-6"
          alt="GitHub"
        />
      </button>
      <button
        href="https://www.linkedin.com/in/garret-gallant/"
        target="_blank"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
          className="h-6 w-6"
          alt="LinkedIn"
        />
      </button>
      <button
        href="https://medium.com/@GarretGallant"
        target="_blank"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968885.png"
          className="h-6 w-6"
          alt="Medium Profile"
        />
      </button>
    </div>
  );
};

export default Footer;
