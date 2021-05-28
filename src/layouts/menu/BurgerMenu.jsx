import { motion } from 'framer-motion';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'red',
    width: '60vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    right: 0,
  },
}));
const BurgerMenu = ({ open }) => {
  const styles = useStyles();
  return (
    <>
      {open && (
        <motion.div animate={{ x: 100 }} className={styles.container}>
          <h1>Hello</h1>
        </motion.div>
      )}
    </>
  );
};

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default BurgerMenu;
