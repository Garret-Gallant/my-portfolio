import React from "react";

const Resume = () => {
  const preview =
    "https://docs.google.com/document/d/10hNAzB_n-yX0eC45ZqgD_LU1luI5MqZWKkiSmkTSFVs/preview?usp=sharing";

  return (
    <div className="flex flex-col items-center justify-center bg-[url('./assets/background.gif')] p-20">
      <a href="https://docs.google.com/document/d/10hNAzB_n-yX0eC45ZqgD_LU1luI5MqZWKkiSmkTSFVs/export?format=pdf">
      <button
        className="md:fixed md:top-40 md:left-20 md:w-40 md:mb-10 md:h-10 border-2 border-slate-400 rounded-lg text-white p-2 bg-slate-800 sm:relative sm:bottom-10"
        color="dark"
      >
        Download A Copy
      </button>
      </a>
      <iframe
        title="resume"
        src={preview}
        className="relative md:w-1/2 sm:w-screen h-screen"
      ></iframe>
    </div>
  );
};

export default Resume;
