import { motion } from 'framer-motion';
import { Box, makeStyles } from '@material-ui/core';
import { ActiveLink } from 'components';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backdropFilter: 'blur(4px)',
    position: 'absolute',
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
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100vh'
            style={{
              backgroundColor: 'rgba(0,0,0, 0.2)',
            }}
          >
            <ActiveLink href='/'>Home</ActiveLink>
            <ActiveLink href='/about'>About</ActiveLink>
            <ActiveLink href='/contact'>Contact</ActiveLink>
            <hr style={{ width: '90vw' }} />
            <ActiveLink href='/sign-in'>Signin</ActiveLink>
            <ActiveLink href='/sign-up'>Signup</ActiveLink>
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
