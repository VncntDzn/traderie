import {
  Grid,
  Box,
  Typography,
  makeStyles,
  Button,
  Hidden,
} from '@material-ui/core';
import PropTypes from 'prop-types';
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
const LandingPage = (props) => {
  const styles = useStyles();
  return (
    <Grid container item direction='row'>
      <Grid
        container
        item
        lg={5}
        direction='column'
        alignItems='flex-start'
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
        <Box position='absolute' zIndex={-1} top={150} left={20} bottom={0}>
          <Image src={Circle} height={500} width={500} />
        </Box>
      </Grid>
      <Hidden mdDown>
        <Grid container item lg={7}>
          <Lottie options={defaultOptions} height={600} width={600} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
