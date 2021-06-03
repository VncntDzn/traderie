import { Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import Image from 'next/image';
import Lottie from 'react-lottie';
import Chart from 'lottie/Chart';
import Circle from './svg/Circle.svg';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Chart,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    border: '3px solid red',
    [theme.breakpoints.up('lg')]: {
      padding: '0 2rem',
    },
  },
  sloganContainer: {
    [theme.breakpoints.up('lg')]: {
      height: '50vh',
    },
  },
  svgContainer: {
    display: 'flex',
    alignSelf: 'center',
    zIndex: -1,
    top: '15%',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      top: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '10%',
    },
  },
  headerText: {
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: 'clamp(1rem, 5vw, 2.5rem)',
    fontWeight: '600',
  },
  subtitleText: {
    fontSize: 'clamp(1rem, 5vw, 1.5rem)',
    fontWeight: '400',
    fontFamily: theme.typography.subtitle1.fontFamily,
  },
}));
const LandingPage = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.container} container item direction='row'>
      <Grid
        className={styles.sloganContainer}
        container
        item
        md={6}
        lg={5}
        direction='column'
        alignItems='center'
        justify='center'
      >
        <Typography className={styles.headerText}>
          Keep track of your trades.
        </Typography>
        <Typography className={styles.subtitleText}>
          Makes you a little wiser. Get more profit.
        </Typography>
        {/* TODO: SHOULD BE AN ACHOR TAG TO ABOUT PAGE */}
        <Button variant='outlined' color='primary'>
          Know More
        </Button>
        <Box className={styles.svgContainer}>
          <Image src={Circle} height={500} width={500} />
        </Box>
      </Grid>
      <Grid container item md={6} lg={7}>
        <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
