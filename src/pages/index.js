import { Navbar } from 'layouts';
import { makeStyles } from '@material-ui/core';
import LandingPage from 'pages/home/LandingPage';
import About from 'pages/home/About'
import Waves from 'pages/home/svg/waves.svg'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: '10vh 2rem',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
  },
  wavesContainer: {
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
      </main>

    </>
  )
}
