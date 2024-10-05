
const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["ReactJS", "NextJS", "NodeJS", "React Native", "Socket.IO"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Firebase"]
  },
  {
    category: "Software",
    skills: ["AutoCAD", "STAAD Pro", "Hydrus-1D"]
  }
]

export default function Skills() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-blue-400">{category.category}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
