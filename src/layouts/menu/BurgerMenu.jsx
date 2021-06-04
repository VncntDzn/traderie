import { motion } from 'framer-motion';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backdropFilter: 'blur(4px)',
    position: 'absolute',
    border: '3px solid red',
    width: '100vw',
    height: '100vh',
    top: 0,
    right: 10,
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
          <Box
            style={{
              backgroundColor: 'rgba(0,0,0, 0.3)',
              marginTop: '-1.2rem',
              height: '100vh',
            }}
          >
            <h1>Hello</h1>
          </Box>
        </motion.div>
      )}
    </>
  );
};

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default BurgerMenu;
