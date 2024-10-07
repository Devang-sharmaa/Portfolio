import { motion } from "framer-motion";
import React from "react";
import { scrollAnimation } from "./Pages/Home";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 px-8 py-16 md:p-16 z-[0]"
    >
      <motion.div
        initial={scrollAnimation.initial}
        whileInView={scrollAnimation.whileInView}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="max-w-5xl space-y-8 text-slate-50">
          <h1 className="font-bold text-3xl text-slate-100">About Me.</h1>
          <div className="text-lg space-y-6 font-light">
            <p>
            I am a dedicated self-taught developer currently pursuing a degree in Computer Science Engineering at the University of Engineering and Management, where I enrolled in Fall 2021.
            </p>
            <p>
              Fun fact: My childhood nostalgia runs deep, manifesting in my love for collecting Funko Pops and Legos that are suited to my interests like anime, superheroes, and sports. You can say I'm still a kid at heart!
            </p>
            <p className="font-light">
              <span className="!text-white mb-2 font-semibold text-transparent">
                Interests:
              </span>{" "}
              Machine Learning and, Web Development, Firmware, Leetcode, Codechef,
              Badminton, Cricket, Chess, Biking.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
