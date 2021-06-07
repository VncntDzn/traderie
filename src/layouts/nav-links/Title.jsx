import { Grid, Typography, Box } from '@material-ui/core';
import RollingPen from 'lottie/RollingPen';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: RollingPen,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const Title = () => {
  return (
    <Grid
      item
      container
      justify='flex-start'
      direction='row'
      alignItems='center'
      lg={2}
      xs={9}
    >
      <Box p={0} m={0}>
        <Lottie options={defaultOptions} height={50} width={50} />
      </Box>
      <Typography color='primary' variant='h1' style={{ fontWeight: 600 }}>
        Traderly.
      </Typography>
    </Grid>
  );
};
export default Title;
