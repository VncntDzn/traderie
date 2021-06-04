import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import Developer from 'lottie/Developer';

import Lottie from 'react-lottie';
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Developer,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      padding: '2rem 5rem',
      flexDirection: 'row',
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
const Services = () => {
  const styles = useStyles();
  return (
    <Grid className={styles.container}>
      <Grid style={{ height: 'fit-content' }} container item md={6}>
        <Lottie options={defaultOptions} height='100%' width='60%' />
      </Grid>
      <Grid container item md={6}>
        <Box>
          <Typography
            color='primary'
            className={styles.titleContainer}
            variant='h1'
          >
            Features
          </Typography>
          <Typography className={styles.aboutUs}>
            Traderly is an e-trading journal where its users can share their
            journal publicly or privately. Basically, Traderly is like any other
            social media platform but for trading only.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

Services.propTypes = {};

export default Services;
