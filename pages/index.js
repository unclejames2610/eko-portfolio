import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Oche | Information Security Analyst</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/assets/navLogo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Contact />
    </div>
  )
}
