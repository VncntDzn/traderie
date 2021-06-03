import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
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
    padding: '10vh 2rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
  },
}));
const About = () => {
  const styles = useStyles();

  return (
    <Grid>
      <Grid container item>
        <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
      </Grid>
    </Grid>
  );
};

export default About;
