import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Card,
  CardContent,
  Box,
  Avatar,
} from '@material-ui/core';
import Vincent from './assets/HMI_VD.jpg';

const feedbacks = [
  {
    feedback: 'Traderly will change the trading journal forever!',
    name: 'Vincent P. Dizon',
    image: Vincent,
  },
  {
    feedback: 'Traderly will change the trading journal forever!',
    name: 'Vincent P. Dizon',
    image: Vincent,
  },
  {
    feedback: 'Traderly will change the trading journal forever!',
    name: 'Vincent P. Dizon',
    image: Vincent,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10rem 2rem',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '25vh',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '20rem',
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  cardContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '10px',
  },
  titleContainer: {
    fontWeight: 600,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 'clamp(1.2rem, 4vw, 2rem)',
    marginBottom: '1rem',
    color: '#26CD86',
  },
  feedbackContainer: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: '1.2rem',
  },
  nameContainer: {
    fontWeight: 600,
    fontFamily: theme.typography.h1.fontFamily,
  },
}));
const Feedback = (props) => {
  const styles = useStyles();
  return (
    <Grid className={styles.container}>
      <Typography className={styles.titleContainer}>
        What people say about Traderly?
      </Typography>
      <Box className={styles.cardContainer}>
        {feedbacks.map((data, index) => (
          <Card className={styles.cardContentContainer} key={index} raised>
            <Avatar
              className={styles.large}
              src={data.image}
              alt={data.image}
            />
            <Typography className={styles.nameContainer}>
              {data.name}
            </Typography>
            <Typography className={styles.feedbackContainer}>
              {data.feedback}
            </Typography>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};

Feedback.propTypes = {};

export default Feedback;
