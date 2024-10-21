"use client"
import ProjectBox from "@/components/ProjectBox"
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

const projects = [
  {
    title: "Kisan",
    description: "A comprehensive platform for farmers featuring services like online mandi, crop rate dashboard, AI bot assistance, transport booking, labor booking, farmer community, and land transactions.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Prisma", "Socket.io", "Tailwind CSS"],
    liveLink: "https://kisan-rouge.vercel.app/",
    ImageUrl: "/kishan.jpg",
    sourceLink: "https://github.com/Rajkumar-Nagar/kishan"
  },
  {
    title: "MintraGo",
    description: "College startup project where I served as Founder & Full Stack Developer. Developed and maintained the platform, handling project planning and execution.",
    technologies: ["React", "Node.js", "MongoDB"],
    ImageUrl: "/mintrago1.jpg",
    liveLink: "https://mintrago.in/",
    sourceLink: "https://github.com/Rajkumar-Nagar/MintraGo"
  },
  {
    title: "Gramzo",
    description: "Led app and website development for an organic products startup. Managed the technical team, improving user experience and driving growth.",
    technologies: ["React Native", "Firebase", "Node.js"],
    liveLink: "#",
    ImageUrl: "/gramzo.jpg",
    sourceLink: "#"
  },
  {
    title: "Chesstune",
    description: "React Native chess app allowing users to play puzzles, challenge others, create custom puzzles, and use login/signup features.",
    technologies: ["React Native", "Firebase", "Chess.js"],
    liveLink: "#",
    ImageUrl: "/chesstune.jpg",
    sourceLink: "#"
  },
  {
    title: "YouTube Backend",
    description: "Developed various APIs for CRUD operations, login, signup, and image uploads. Implemented authentication using JWT tokens.",
    technologies: ["Node.js", "Express.js", "JWT", "Multer"],
    liveLink: "#",
    ImageUrl: "/Youtube.jpg",
    sourceLink: "#"
  },
  {
    title: "NewsMonkey",
    description: "ReactJS-based news application where users can read news articles across various categories. Implemented navigation using React Router and fetched data from APIs.",
    technologies: ["ReactJS", "React Router", "API"],
    liveLink: "#",
    ImageUrl: "/news.jpg",
    sourceLink: "#"
  },
  {
    title: "Kalyaan-Hospital",
    description: "Hospital management system with features like appointment scheduling, staff management, and a medical store. Included user authentication and role-based access.",
    technologies: ["Next.js", "TypeScript", "NextAuth", "Prisma", "SQL", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://e-hospital.vercel.app/",
    ImageUrl: "/kalyaan.jpg",
    sourceLink: "https://github.com/Rajkumar-Nagar/e-hospital"
  }
];

export default function ProjectSection() {
  return (
    <div className="w-full py-10 relative h-max overflow-hidden">
       <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={"inset-x-0 inset-y-[-30%] w-full h-[200%] skew-y-12 opacity-20"}
      />
      <h1 className="text-4xl font-bold my-8 px-8">My Projects</h1>
      <div className="grid "
        style={{
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))'
        }}>
        {projects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
