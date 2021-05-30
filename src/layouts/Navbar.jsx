import { useState } from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Box,
  Hidden,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import BurgerMenu from './menu/BurgerMenu';
import RollingPen from 'lottie/RollingPen';
import Lottie from 'react-lottie';
import ElevationScroll from './ElevationScroll';
import CustomTypography from 'components/CustomTypography';

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
    margin: '0 0.6rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
  },
  titleContainer: {
    color: theme.palette.primary.main,
    fontSize: 'clamp(1rem, 5vw, 2rem)',
    fontWeight: '600',
  },
  signinBackground: {
    color: '#FFFFFF',
    padding: '0 1rem',
    background: '#DCE35B' /* fallback for old browsers */,
    background:
      '-webkit-linear-gradient(to right, #45B649, #DCE35B)' /* Chrome 10-25, Safari 5.1-6 */,
    background:
      'linear-gradient(to right, #45B649, #DCE35B)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
}));

const Navbar = (props) => {
  const styles = useStyles();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: 'white' }}>
          <Toolbar>
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
              >
                <Box p={0} m={0}>
                  <Lottie options={defaultOptions} height={50} width={50} />
                </Box>
                <Typography className={styles.titleContainer} variant='h1'>
                  Traderly.
                </Typography>
              </Grid>

              <Hidden mdDown>
                <Grid
                  item
                  container
                  direction='row'
                  alignItems='center'
                  lg={8}
                  justify='space-evenly'
                  style={{ padding: '0 20vw' }}
                >
                  <CustomTypography fontWeight={600} text='Home' />
                  <CustomTypography fontWeight={600} text='About' />
                  <CustomTypography fontWeight={600} text='Contact' />
                </Grid>
              </Hidden>
              <Grid
                container
                item
                justify='space-around'
                direction='row'
                lg={2}
                xs={3}
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
                  <Button className={styles.signinBackground}>Signin</Button>
                </Hidden>
              </Grid>

              <BurgerMenu open={toggle} />
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
