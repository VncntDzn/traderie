import { Navbar } from 'layouts';
import LandingPage from 'pages/home/LandingPage';
import About from 'pages/home/About'
import Waves from 'pages/home/svg/waves.svg'

export default function Home() {

  return (
    <>
      <Navbar />
      <main >
        <LandingPage />
        <img alt="waves" src={Waves} />
        <About />
      </main>

    </>
  )
}
