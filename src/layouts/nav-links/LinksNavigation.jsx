import { Grid, Hidden } from '@material-ui/core';
import { CustomTypography } from 'components';

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
        <CustomTypography fontSize={16} fontWeight={600} text='Home' />
        <CustomTypography fontSize={16} fontWeight={600} text='About' />
        <CustomTypography fontSize={16} fontWeight={600} text='Contact' />
      </Grid>
    </Hidden>
  );
};

export default LinksNavigation;
