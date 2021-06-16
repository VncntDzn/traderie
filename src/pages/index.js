import {
  About,
  FAQs,
  Feedbacks,
  Footer,
  Services,
  LandingPage
} from './home'
import { makeStyles } from '@material-ui/core';
import Waves from './home/svg/waves.svg';

const useStyles = makeStyles((theme) => ({
  wavesContainer: {
    backgroundColor: 'white',
    position: 'absolute'
  }
}));

export default function Home() {
  const styles = useStyles();

  return (
    <main>
      <LandingPage />
      <img className={styles.wavesContainer} alt="waves" src={Waves} />
      <About />
      <Services />
      <FAQs />
      <img className={styles.wavesContainer} alt="waves" src={Waves} />
      <Feedbacks />

    </main>
  )
}
