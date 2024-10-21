import React from "react";
import { IconCloudDemo } from "@/components/SkillGlob";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Title Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">About Me</h2>
          <div className="bg-teal-400 h-1 w-24 mb-8"></div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <p className="text-sm text-gray-200 font-mono">
              <span className="text-teal-300">Hello!</span><br />
              <br />
              My name is Rajkumar, and I specialize in full-stack web and app development, with expertise in <span className="text-teal-300">HTML</span>, <span className="text-teal-300">CSS</span>, <span className="text-teal-300">JavaScript</span>, <span className="text-teal-300">React</span>, and <span className="text-teal-300">Node.js</span>.<br />
              <br />
              {`I'm`} a passionate full-stack developer and competitive programmer, always aiming to create clean, efficient, and scalable code. I thrive on continuously learning and improving my skills.<br />
              <br />
              When {`I'm`} not coding, I enjoy contributing to open-source projects, solving coding challenges, or working on my latest side projects. I also spend time <span className="text-teal-300">exploring new technologies</span> and enhancing my problem-solving skills through competitive programming.<br />
              <br />
              {`I'm`} driven by a desire to push my limits and explore new perspectives, both in technology and in life.
            </p>

          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
         <IconCloudDemo/>
        </div>
      </div>
    </section>
  );
};

export default About;
