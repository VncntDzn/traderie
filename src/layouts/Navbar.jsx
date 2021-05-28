import { useState } from 'react';
import {
  Grid,
  Typography,
  IconButton,
  makeStyles,
  Box,
  Hidden,
} from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import BurgerMenu from './menu/BurgerMenu';
import theme from 'styles/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '3px solid green',
  },
  titleContainer: {
    paddingLeft: '1rem',
    border: '3px solid red',
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
      justify='space-between'
      className={styles.container}
    >
      <Grid item container justify='flex-start' xs={10} md={6} lg={8}>
        <Typography className={styles.titleContainer} variant='subtitle1'>
          Traderly.
        </Typography>
      </Grid>
      <Grid
        xs={2}
        lg={4}
        container
        item
        justify='space-around'
        direction='row'
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
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Signin/Signup</Typography>
          <Typography>Contact</Typography>
        </Hidden>
      </Grid>

      <BurgerMenu open={toggle} />
    </Grid>
  );
};

Navbar.propTypes = {};

export default Navbar;
