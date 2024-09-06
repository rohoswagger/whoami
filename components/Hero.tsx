import Head from 'next/head'
import Link from 'next/link'

import { LINKS } from '@/data/links'

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Roshan Desai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">RD</div>
        <nav>
          <Link href="/mission" className="mx-2 text-2xl">Mission</Link>
          <Link href="/blog" className="mx-2 text-2xl">Blog</Link>
          <Link href="/about" className="mx-2 text-2xl">About</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">Roshan Desai</h1>
        <p className="text-3xl mb-8">Founder (or at least trying to be)</p>
      </main>

      <footer className="p-4 text-center">
        <div className="mb-2">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="mx-2">
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        <p>Made with ❤️ by Roshan Desai</p>
      </footer>
    </div>
  )
}

export default Hero