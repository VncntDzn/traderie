import React from 'react';
import { useScrollTrigger } from '@material-ui/core';
import PropTypes from 'prop-types';

const ElevationScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

ElevationScroll.propTypes = {};

export default ElevationScroll;
