import Link from 'next/link'


export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-blue-400">Send Me a Message</h2>
          <form className="mt-4 space-y-4">
            <input className="w-full bg-gray-700 border-gray-600 p-2 rounded-lg" placeholder="Your Name" />
            <input className="w-full bg-gray-700 border-gray-600 p-2 rounded-lg" type="email" placeholder="Your Email" />
            <textarea className="w-full bg-gray-700 border-gray-600 p-2 rounded-lg" placeholder="Your Message"></textarea>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Send Message</button>
          </form>
        </div>
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-blue-400">Contact Information</h2>
          <p className="mt-4">Email: 2021uce1514@mnit.ac.in</p>
          <p>GitHub: <Link href="https://github.com/Rajkumar-Nagar" className="text-blue-400 hover:underline">github.com/Rajkumar-Nagar</Link></p>
          <p>LinkedIn: <Link href="https://www.linkedin.com/in/rajkumarnagar" className="text-blue-400 hover:underline">linkedin.com/in/rajkumarnagar</Link></p>
        </div>
      </div>
    </div>
  )
}
