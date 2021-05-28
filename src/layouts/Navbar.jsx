import { useState } from 'react';
import {
  Grid,
  Typography,
  IconButton,
  makeStyles,
  Box,
  Hidden,
} from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PropTypes from 'prop-types';
import { Cross as Hamburger } from 'hamburger-react';
import BurgerMenu from './menu/BurgerMenu';
import theme from 'styles/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '3px solid green',
    fontFamily: theme.typography.h1,
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
      <Grid xs={10} lg={8} item style={{ border: '3px solid blue' }}>
        <Typography variant='subtitle1'>Traderly.</Typography>
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
