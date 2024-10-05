
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Kisan",
      description: "A comprehensive platform for farmers, featuring services like online mandi, crop rate dashboard, AI bot assistance, transport booking, labor booking, farmer community, and land transactions.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Prisma", "Socket.io", "Tailwind CSS"],
      reviewLink: "#",
      sourceLink: "#"
    },
    {
      title: "MintraGo",
      description: "College startup project where I served as Founder & Full Stack Developer. Handled project planning, execution, and team leadership.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      reviewLink: "#",
      sourceLink: "#"
    },
    {
      title: "Gramzo",
      description: "Organic Products Startup where I led app and website development, improving user experience and implementing innovative solutions.",
      technologies: ["React Native", "Firebase", "Node.js"],
      reviewLink: "#",
      sourceLink: "#"
    }
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-900 text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" asChild>
                  <Link href={project.reviewLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Review
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}