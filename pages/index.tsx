import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import type { NextPage } from 'next';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Julius Caesar's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home;
