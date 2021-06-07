import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import ExcelCloud from 'lottie/ExcelCloud';
import Lottie from 'react-lottie';
import theme from 'styles/theme';

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
    padding: '20vh 2rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: '0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '35rem 10rem 0 10rem',
    },
  },
  aboutUs: {
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: 'clamp(1.1rem, 5vw, 1.4rem)',
    textIndent: '1.5rem',
    textAlign: 'justify',
    textJustify: 'inter-word',
  },
}));
const About = () => {
  const styles = useStyles();

  return (
    <Grid id='about' className={styles.container}>
      <Grid container item md={5}>
        <Box>
          <Typography style={theme.titleContainer} variant='h1'>
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
