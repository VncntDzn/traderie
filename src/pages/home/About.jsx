import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import ExcelCloud from 'lottie/ExcelCloud';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ExcelCloud,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: '0 2rem',
    paddingTop: '20vh',

    [theme.breakpoints.up('md')]: {
      padding: '20rem 5rem 0 5rem',
      display: 'flex',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '35rem 10rem 0 10rem',
    },
  },
  titleContainer: {
    fontWeight: 700,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 'clamp(1.7rem, 5vw, 2.5rem)',
    marginBottom: '1rem',
    width: 'fit-content',
    height: 'fit-content',
  },
  aboutUs: {
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: 'clamp(1.1rem, 5vw, 1.5rem)',
    textIndent: '1.5rem',
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
}));
const About = () => {
  const styles = useStyles();

  return (
    <Grid className={styles.container}>
      <Grid container item md={5}>
        <Box>
          <Typography className={styles.titleContainer} variant='h1'>
            About {''}
            <span color='primary' style={{ color: '#26CD86' }}>
              Traderly.
            </span>
          </Typography>
          <Typography className={styles.aboutUs}>
            Traderly is an e-trading journal where its users can share their
            journal publicly or privately. Basically, Traderly is like any other
            social media platform but for trading only.
          </Typography>
        </Box>
      </Grid>
      <Grid style={{ height: 'fit-content' }} container item md={7}>
        <Lottie options={defaultOptions} height='100%' width='60%' />
      </Grid>
    </Grid>
  );
};

export default About;
