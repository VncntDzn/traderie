import { useState } from 'react';
import {
  Grid,
  Typography,
  IconButton,
  makeStyles,
  Box,
  Hidden,
  Button,
} from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import BurgerMenu from './menu/BurgerMenu';
import theme from 'styles/theme';
import RollingPen from 'lottie/RollingPen';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: RollingPen,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.main,
    border: '3px solid red',
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
  },
}));

const Navbar = (props) => {
  const styles = useStyles();
  const [toggle, setToggle] = useState(false);

  return (
    <Grid
      container
      item
      alignItems='center'
      justify='space-evenly'
      className={styles.container}
    >
      <Grid
        item
        container
        justify='flex-start'
        direction='row'
        alignItems='center'
        lg={2}
        xs={9}
        style={{ border: '3px solid red' }}
      >
        <Box p={0} m={0}>
          <Lottie options={defaultOptions} height={50} width={50} />
        </Box>
        <Typography variant='h1'>TRADERLY.</Typography>
      </Grid>

      <Hidden mdDown>
        <Grid
          item
          container
          direction='row'
          alignItems='center'
          lg={8}
          justify='space-evenly'
          style={{ border: '3px solid red', padding: '0 20rem' }}
        >
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Contact</Typography>
        </Grid>
      </Hidden>
      <Grid
        container
        item
        justify='space-around'
        direction='row'
        lg={2}
        xs={3}
        style={{ border: '3px solid red' }}
      >
        <Hidden mdUp>
          <Box zIndex={1}>
            <Hamburger
              size={22}
              toggled={toggle}
              toggle={() => setToggle(!toggle)}
            />
          </Box>
        </Hidden>
        <Hidden mdDown>
          <Button>Signup</Button>
          <Button
            color='primary'
            variant='contained'
            style={{ color: 'white', borderRadius: 8 }}
          >
            Signin
          </Button>
        </Hidden>
      </Grid>

      <BurgerMenu open={toggle} />
    </Grid>
  );
};

Navbar.propTypes = {};

export default Navbar;
