import Layout from '../components/layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Send Me a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" placeholder="Your Name" className="bg-gray-700 border-gray-600" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-700 border-gray-600" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="bg-gray-700 border-gray-600" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="flex items-center">
              <Mail className="mr-2" /> 2021uce1514@mnit.ac.in
            </p>
            <p className="flex items-center">
              <Github className="mr-2" /> <Link href="#" className="hover:text-blue-400">GitHub</Link>
            </p>
            <p className="flex items-center">
              <Linkedin className="mr-2" /> <Link href="#" className="hover:text-blue-400">LinkedIn</Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}