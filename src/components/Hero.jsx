import React from "react";
import { HERO_CONTENT } from "../constants";
import portfolio_pic from "../assets/portfolio_pic.png";
import { motion } from "framer-motion";
import CV from "../assets/cv.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aashish kumar
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <a href={CV} download>
              <button className="relative px-6 py-3 font-medium text-gray-800 border border-gray-300 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:text-white hover:border-gray-600 group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative">Resume</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={portfolio_pic}
              alt="portfoliio_pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
