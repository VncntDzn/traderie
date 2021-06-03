import {
  Grid,
  makeStyles,
  Box,
  Hidden,
  Button,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { BurgerLinks, LinksNavigation, Title } from './nav-links';
import ElevationScroll from './ElevationScroll';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 0.6rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 5rem',
    },
  },
  signinBackground: {
    color: '#FFFFFF',
    padding: '0 1rem',
    background: 'linear-gradient(to right, #45B649, #DCE35B)',
  },
}));

const Navbar = (props) => {
  const styles = useStyles();

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
              <Title />
              <LinksNavigation />

              <Grid
                container
                item
                justify='space-around'
                direction='row'
                lg={2}
                xs={2}
              >
                <BurgerLinks />
              </Grid>
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
