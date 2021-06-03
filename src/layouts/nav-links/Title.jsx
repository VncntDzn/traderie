import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import RollingPen from 'lottie/RollingPen';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: RollingPen,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const useStyles = makeStyles((theme) => ({
  titleContainer: {
    color: theme.palette.primary.main,
    fontSize: 'clamp(1.3rem, 5vw, 2rem)',
    fontWeight: '600',
  },
}));
const Title = () => {
  const styles = useStyles();
  return (
    <Grid
      item
      container
      justify='flex-start'
      direction='row'
      alignItems='center'
      lg={2}
      xs={9}
    >
      <Box p={0} m={0}>
        <Lottie options={defaultOptions} height={50} width={50} />
      </Box>
      <Typography className={styles.titleContainer} variant='h1'>
        Traderly.
      </Typography>
    </Grid>
  );
};

Title.propTypes = {};

export default Title;
