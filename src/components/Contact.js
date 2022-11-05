import React from "react";

const Contact = () => {
  // Implement Mail.js API for properly formatted emails to new URL

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="h-screen bg-[url('./assets/background.gif')]">
      <form action="mailto:garret@gallantsoftware.dev" method="get" enctype="text/plain" className=" flex flex-col items-center p-20">
        <div>
        <input
          type="text"
          className="rounded-lg bg-slate-700 text-white placeholder-white"
          placeholder="Company/Name..."
        ></input>
        <input
          type="text"
          className="rounded-lg bg-slate-700 text-white placeholder-white ml-5"
          placeholder="Email..."
        ></input>
        </div>
        <textarea
          id="message"
          rows="6"
          className="rounded-lg w-full text-small mt-10 bg-slate-700 placeholder-white"
          placeholder="Message..."
        ></textarea>
        <input
          type='submit'
          value="Send Message"
          className="w-40 m-10 border-2 border-slate-400 rounded-lg text-white p-2 bg-slate-800 duration-300 hover:scale-110 hover:border-slate-900"
          onCLick={handleSubmit}
        ></input>
      </form>
    </div>
  );
};

export default Contact;
