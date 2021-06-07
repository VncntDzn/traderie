import {
  Grid,
  Typography,
  makeStyles,
  Button,
  Hidden,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import { ActiveLink } from 'components';
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
  headerText: {
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontSize: 'clamp(1.7rem, 5vw, 3.5rem)',
    fontWeight: '600',
  },
}));

const LandingPage = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.container} container item direction='row'>
      <Grid
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
        <Typography variant='subtitle1'>
          Makes you a little wiser. Get more profit.
        </Typography>

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
          <ActiveLink href='/#about'>
            <Button
              variant='outlined'
              color='primary'
              endIcon={<ArrowDownwardIcon />}
              style={{ margin: '1rem 0' }}
            >
              Know More
            </Button>
          </ActiveLink>
        </motion.div>
      </Grid>
      <Hidden xsDown>
        <Grid container item md={6} lg={7}>
          <Lottie options={defaultOptions} height='100%' width='70%' />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default LandingPage;
