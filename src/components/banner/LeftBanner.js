import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["ARTIFICIAL INTELLIGENCE / MACHINE LEARNING ENGINEER.", "DATA SCIENTIST / ANALYST", , "Full Stack Developer.", " PYTHON AUTOMATION DEVELOPER"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Abbas Ghori</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          an AI student at FAST National University with a CGPA of 3.57/4,
          specializing in AI, machine learning, and web development.
          I have developed AI-powered applications such as a legal document analyzer and an academy chatbot.
          My skills include Python, Java, JavaScript, and full-stack development with Django and React.
          I have professional experience as an Automation Engineer at Procom'24 and as a Django Intern at Zays.
          I am seeking an AI Engineer or Data Scientist role to apply my expertise and contribute to innovative solutions.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner