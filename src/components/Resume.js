import React from "react";

const Resume = () => {
  const preview =
    "https://docs.google.com/document/d/1d8APwQA_0c4-pCgFHTezDVkAm9nv20U7qHcsKmZxfJE/preview";

  return (
    <div className="flex flex-col items-center justify-center bg-[url('./assets/background.gif')] p-20">
      <button
        className="fixed top-40 left-20 w-40 mb-10 border-2 border-slate-400 rounded-lg text-white p-2 bg-slate-800"
        href="https://docs.google.com/document/d/1d8APwQA_0c4-pCgFHTezDVkAm9nv20U7qHcsKmZxfJE/export?format=pdf"
        color="dark"
      >
        Download A Copy
      </button>
      <iframe
        title="resume"
        src={preview}
        className="relative w-1/2 h-screen"
      ></iframe>
    </div>
  );
};

export default Resume;
