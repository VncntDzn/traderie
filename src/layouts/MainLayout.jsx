import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <Grid>
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
