import { motion } from 'framer-motion';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'red',
    width: '70vw',
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
        <motion.div
          className={styles.container}
          initial={{ x: 0 }}
          animate={{ x: 10 }}
          transition={{
            x: { type: 'spring', stiffness: 20 },
          }}
        >
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
