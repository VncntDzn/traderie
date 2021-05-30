import { Navbar } from 'layouts';
import { makeStyles } from '@material-ui/core';
import LandingPage from 'pages/home/LandingPage'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 8rem'
    }
  }
}))
export default function Home() {
  const styles = useStyles()
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <LandingPage />
      </main>
    </>
  )
}
