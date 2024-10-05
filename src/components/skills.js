import Layout from '../components/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frameworks and Libraries",
      skills: ["ReactJS", "NextJS", "NodeJS", "Socket.IO", "React Native"]
    },
    {
      category: "Software",
      skills: ["AutoCAD", "CropWat", "STAAD Pro", "Hydrus-1D", "EPASWMM"]
    },
    {
      category: "Database and Analysis Tools",
      skills: ["Firebase", "MongoDB"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Project Management", "Leadership", "Time Management"]
    }
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}