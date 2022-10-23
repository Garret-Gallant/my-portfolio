import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const NavBar = () => {
  return (
    <div className="flex flex-wrap gap-4 bg-slate-700 p-5 w-100 justify-self-auto justify-center">
      <img src="nav-logo.png" alt="Site Logo" className="w-30 h-20" />
      <Link className="relative top-5" to="/">
        <Button color="dark">Home</Button>
      </Link>
      <Link className="relative top-5" to="/projects">
        <Button color="dark">Projects</Button>
      </Link>
      <Link className="relative top-5" to="/resume">
        <Button color="dark">Resume</Button>
      </Link>
      <Link className="relative top-5" to="/about">
        <Button color="dark">About</Button>
      </Link>
      <Link className="relative top-5" to="/contact">
        <Button color="dark">Contact</Button>
      </Link>
      <Link className="relative top-5" to="/blog">
        <Button color="dark">Blog Feed</Button>
      </Link>
    </div>
  );
};

export default NavBar;
