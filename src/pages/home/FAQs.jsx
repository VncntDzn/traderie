import {
  Grid,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    padding: '5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.up('md')]: {
      padding: '1rem 10rem',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: '5rem',
    },
  },
  faqContainer: {
    fontWeight: 500,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: 'clamp(1.3rem, 4vw, 2rem)',
    marginBottom: '1rem',
    color: '#26CD86',
  },
  accordionContainer: {
    [theme.breakpoints.up('md')]: {
      width: '40vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30vw',
    },
  },

  contentStyle: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: '1rem',
    textIndent: '1.5rem',
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontWeight: 400,
  },
}));
const data = [
  {
    title: 'What is Traderly?',
    content:
      'Traderly is an e-trading journal where its users can share their \
        journal publicly or privately. Basically, Traderly is like any other \
        social media platform but for trading only.',
  },
  {
    title: 'Why Traderly?',
    content:
      'Traderly is hassle less compared to spreadsheet or excel. You can also share your trading journals to other users either publicly or privately.',
  },
  {
    title: 'Who develop Traderly?',
    content:
      'Vincent, developed traderly because he wants to revolutionize trading journals.',
  },
  {
    title: 'What stack did Vincent used to developed Traderly.?',
    content: 'NextJs, React, Firebase Firestore and Material Ui.',
  },
  {
    title: 'What is the status of traderly?',
    content:
      'Traderly is still underdevelopment and will release future updates soon.',
  },
  {
    title: 'How can I contact Vincent?',
    content: 'You can reach by emailing him at: workvpdizon@gmail.com',
  },
];
const FAQs = (props) => {
  const styles = useStyles();
  return (
    <Grid id='contact' className={styles.container}>
      <Typography className={styles.faqContainer}>
        Frequently Ask Questions
      </Typography>
      {data.map(({ title, content }, index) => (
        <Accordion className={styles.accordionContainer} key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'
          >
            <Typography variant='h1'>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.contentStyle}>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  );
};

FAQs.propTypes = {};

export default FAQs;
