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
      <body className="dark">

        {children}

      </body>
    </html>
  )
}
