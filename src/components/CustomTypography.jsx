import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles, Link } from '@material-ui/core';

const CustomTypography = (props) => {
  const {
    fontWeight = 500,
    variant = 'subtitle1',
    fontSize = 18,
    text,
    className,
  } = props;
  const useStyles = makeStyles((theme) => ({
    container: {
      fontWeight: fontWeight,
      fontSize: fontSize,
      '&:active': {
        borderBottom: '3px solid red',
      },
      '&:focus': {
        borderBottom: `3px solid yellow`,
      },
    },
  }));
  const styles = useStyles();
  return <Link className={[styles.container, className]}>{text}</Link>;
};

CustomTypography.propTypes = {};

export default CustomTypography;
