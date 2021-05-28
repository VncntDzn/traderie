import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import Image from 'next/image';
import Lottie from 'react-lottie';
import ExcelCloud from 'lottie/ExcelCloud';
import Circle from './svg/Circle.svg';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ExcelCloud,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LandingPage = (props) => {
  return (
    <Grid container item direction='row'>
      <Grid
        container
        item
        lg={4}
        direction='column'
        alignItems='flex-start'
        justify='center'
      >
        <h1>Keep track of your trades.</h1>
        <p>Makes you a little wiser. Get more profit.</p>
      </Grid>
      <Grid container item lg={8}>
        <Lottie options={defaultOptions} height={600} width={600} />
        <Box
          overflow='hidden'
          position='absolute'
          zIndex={-1}
          bottom={70}
          right={250}
        >
          <Image src={Circle} height={800} width={800} />
        </Box>
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
