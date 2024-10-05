import Link from "next/link"

const projects = [
  {
    title: "Kisan",
    description: "A platform for farmers offering services like online mandi, AI assistance, and land transactions.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Prisma"],
    liveLink: "https://kisan-rouge.vercel.app/",
    sourceLink: "https://github.com/Rajkumar-Nagar/kishan"
  },
  {
    title: "MintraGo",
    description: "College startup project where I served as Founder & Full Stack Developer.",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://mintrago.in/",
    sourceLink: "https://github.com/Rajkumar-Nagar/MintraGo"
  },
  {
    title: "Gramzo",
    description: "Organic Products Startup where I led app and website development.",
    technologies: ["React Native", "Firebase", "Node.js"],
    liveLink: "#",
    sourceLink: "#"
  }
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-blue-400">{project.title}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-4">
              <span className="font-semibold text-blue-400">Technologies:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <Link href={project.liveLink} className="text-blue-400 hover:underline" target="_blank">Live</Link>
              <Link href={project.sourceLink} className="text-blue-400 hover:underline" target="_blank">Source</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
