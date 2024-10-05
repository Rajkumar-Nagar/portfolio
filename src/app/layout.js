import Link from 'next/link'
import Head from 'next/head'
import "./globals.css";

export default function Layout({ children }) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <html lang="en">
      <Head>
        <title>Rajkumar Nagar | Portfolio</title>
        <meta name="description" content="Portfolio of Rajkumar Nagar, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Header */}
        <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between">
            <h1 className="text-2xl font-bold text-blue-400">Rajkumar Nagar</h1>
            <ul className="flex space-x-6">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-400 transition" aria-label={item.label}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-4">
          <p>&copy; 2024 Rajkumar Nagar. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
