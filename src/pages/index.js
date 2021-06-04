import { Navbar } from 'layouts';
import { makeStyles } from '@material-ui/core';

import LandingPage from 'pages/home/LandingPage';
import About from 'pages/home/About'
import Waves from 'pages/home/svg/waves.svg'
import Services from 'pages/home/Services'

const useStyles = makeStyles((theme) => ({
  wavesContainer: {
    backgroundColor: 'white',
    position: 'absolute'
  }
}));

export default function Home() {
  const styles = useStyles();

  return (
    <>
      <Navbar />
      <main >
        <LandingPage />
        <img className={styles.wavesContainer} alt="waves" src={Waves} />
        <About />
        <Services />
      </main>

    </>
  )
}
