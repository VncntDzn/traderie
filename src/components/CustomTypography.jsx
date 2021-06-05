import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const CustomTypography = (props) => {
  const {
    fontWeight = 400,
    variant = 'subtitle1',
    fontSize = 18,
    text,
  } = props;
  const useStyles = makeStyles((theme) => ({
    container: {
      fontWeight: fontWeight,
      fontSize: fontSize,
    },
  }));
  const styles = useStyles();
  return (
    <Typography variant={variant} className={styles.container}>
      {text}
    </Typography>
  );
};

CustomTypography.propTypes = {};

export default CustomTypography;
