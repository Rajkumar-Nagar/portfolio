import Link from "next/link";

export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-xl max-w-2xl">
          I am a passionate Full Stack Developer who enjoys building applications that make an impact. With experience in startups like Kisan and MintraGo, I bring leadership and problem-solving skills to the table.
        </p>
        <Link href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full">
          Contact Me
        </Link>
      </div>
    )
  }
  