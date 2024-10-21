"use client"
import React, { useEffect, useState } from "react";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS, Sass & Bootstrap", level: "Advanced" },
  { name: "JavaScript, TypeScript, JQuery", level: "Advanced" },
  { name: "ReactJS, NextJS", level: "Advanced" },
  { name: "NodeJS, Socket.IO", level: "Intermediate" },
  { name: "SQL, PostgreSQL", level: "Intermediate" },
];

const additionalSkills = [
  "Git",
  "Quick learning",
  "RWD",
  "Problem Solving",
  "Leadership",
  "Project Management",
  "B2 English",
];

const skillLevelPercentage = {
  Advanced: 100,
  Intermediate: 70,
  Beginner: 40,
};

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(skillLevelPercentage[level]);
    }, 200);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
          style={{
            width: `${width}%`,
            transition: "width 1.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

const AdditionalSkills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {additionalSkills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full mr-2"></div>
          <span className="text-md text-white">{skill}</span>
        </div>
      ))}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 p-6">
      <h2 className="text-3xl font-bold mb-8">Technologies</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
      <h2 className="text-2xl font-bold mt-12 mb-4">Additional Technologies and Skills</h2>
      <AdditionalSkills />
    </section>
  );
};

export default SkillsSection;
