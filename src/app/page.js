import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white">
      {/* Profile Image with Glowing Background */}
      <div className="relative">
        <Image
          src="/PasswordTypephoto.png" // Replace this with your actual image path
          alt="Rajkumar Nagar"
          width={100}
          height={100}
          className="w-48 h-48 rounded-full shadow-lg border-4 border-gray-700"
        />
        {/* Glowing Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-50 blur-2xl z-[-1]"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl font-bold mt-6 mb-4">Rajkumar Nagar</h1>

      {/* Subheading */}
      <h2 className="text-3xl mb-6 text-blue-400">Full Stack Developer</h2>

      {/* Description */}
      <p className="text-xl mb-8 max-w-2xl text-center">
        Full Stack Developer with startup experience, leading projects like Kisan and MintarGo.
      </p>

      {/* Call-to-Action Button */}
      <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-full transition transform hover:scale-105 shadow-lg">
        View My Projects
      </Link>
    </div>
  )
}
