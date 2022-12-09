import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  function gitHub() {
    window.open("https://github.com/Garret-Gallant")
  }
  function linkedIn() {
    window.open("https://www.linkedin.com/in/garret-gallant/")
  }
  function Blogs() {
    window.open("https://medium.com/@GarretGallant")
  }
  
  return (
    <div className="flex flex-row gap-4 p-5 bg-slate-600 justify-center min-w-screen h-20">
      <div className="sticky flex flex-col justify-center">
        <h1 class="text-white ml-10">Email: garret@gallantsoftware.dev</h1>
        <h1 class="text-white ml-10">Phone: 303-523-0283</h1>
      </div>
      <Link onClick={gitHub} className="mt-2.5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="h-6 w-6"
          alt="GitHub"
        />
        </Link>
        <Link onClick={linkedIn} className="mt-2.5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
          className="h-6 w-6"
          alt="LinkedIn"
        />
      </Link>
      <Link onClick={Blogs} className="mt-2.5">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968885.png"
          className="h-6 w-6"
          alt="Medium Profile"
        />
      </Link>
    </div>
  );
};

export default Footer;
