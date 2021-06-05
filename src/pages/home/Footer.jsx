import {
  Grid,
  Typography,
  makeStyles,
  Box,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#26CD86',
    padding: '0 2rem',
  },
  titleContainer: {
    fontWeight: 700,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 'clamp(1.3rem, 4vw, 2rem)',
    color: 'white',
  },
}));
const Footer = (props) => {
  const styles = useStyles();
  return (
    <Grid
      className={styles.container}
      container
      direction='row'
      justify='space-between'
      alignItems='center'
    >
      <Grid>
        <Typography className={styles.titleContainer}>Traderly.</Typography>
      </Grid>
      <Grid>
        <IconButton href='https://github.com/VncntDzn'>
          <GitHubIcon />
        </IconButton>
        <IconButton href='https://www.linkedin.com/in/vincent-dizon-34831817b/'>
          <LinkedInIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {};

export default Footer;
