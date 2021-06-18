import {
  Grid,
  Typography,
  makeStyles,
  Button,
  Hidden,
  Card,
  Box,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import Field from 'components/Field';
import { signinSchema } from 'helpers';

const Signin = (props) => {
  return (
    <Grid>
      <Typography>Welcome Back!</Typography>
      <Card>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={signinSchema}
          onSubmit={(values) => alert(values)}
        >
          <Form>
            <Field name='password' placeholder='Password' />
            <Box mt={3}>
              <Button
                color='secondary'
                variant='contained'
                fullWidth
                type='submit'
                style={{ color: 'white' }}
              >
                Submit
              </Button>
            </Box>
          </Form>
        </Formik>
      </Card>
    </Grid>
  );
};

Signin.propTypes = {};

export default Signin;
