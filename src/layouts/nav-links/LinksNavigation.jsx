import { Grid, Hidden } from '@material-ui/core';
import { ActiveLink } from 'components';

const LinksNavigation = () => {
  return (
    <Hidden mdDown>
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        lg={8}
        justify='space-evenly'
        style={{ padding: '0 15vw' }}
      >
        <ActiveLink href='/'>Home</ActiveLink>
        <ActiveLink href='/about'>About</ActiveLink>
        <ActiveLink href='/contact'>Contact</ActiveLink>
      </Grid>
    </Hidden>
  );
};

export default LinksNavigation;
