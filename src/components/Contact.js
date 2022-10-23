import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="h-screen bg-[url('./assets/background.gif')]">
      <form className=" flex flex-col items-center p-20">
        <input
          type="text"
          className="rounded-lg bg-slate-700 text-white placeholder-white"
          placeholder="Company/Name..."
        ></input>
        <textarea
          id="message"
          rows="6"
          className="rounded-lg w-full text-small mt-10 bg-slate-700 placeholder-white"
          placeholder="Message..."
        ></textarea>
        <button
          className="w-40 m-10 border-2 border-slate-400 rounded-lg text-white p-2 bg-slate-800 duration-300 hover:scale-110 hover:border-slate-900"
          onCLick={handleSubmit}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
