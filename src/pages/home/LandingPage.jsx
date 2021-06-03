import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import Chart from 'lottie/Chart';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
    backgroundColor: 'white',
    padding: '10vh 2rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 2rem',
    },
  },
  sloganContainer: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '7vw',
      height: '65vh',
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
    fontSize: 'clamp(1.7rem, 5vw, 3.5rem)',
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
        alignItems='flex-start'
        justify='center'
      >
        <Typography className={styles.headerText}>
          Keep track of your{' '}
          <span color='primary' style={{ color: '#26CD86' }}>
            trades.
          </span>
        </Typography>
        <Typography className={styles.subtitleText}>
          Makes you a little wiser. Get more profit.
        </Typography>
        {/* TODO: SHOULD BE AN ACHOR TAG TO ABOUT PAGE */}
        <motion.div
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            type: 'spring',
            repeatType: 'mirror',
            ease: 'easeOut',
          }}
        >
          <Button
            variant='outlined'
            color='primary'
            endIcon={<ArrowDownwardIcon />}
            style={{ marginTop: 10 }}
          >
            Know More
          </Button>
        </motion.div>
      </Grid>
      <Grid container item md={6} lg={7}>
        <Lottie options={defaultOptions} height='100%' width='80%' />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
