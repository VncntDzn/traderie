import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <Grid>
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
