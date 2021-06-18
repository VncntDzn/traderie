import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { useField } from 'formik';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/**
 * Field - a wrapper for material ui TextField with icon.
 * Also it uses formik and yup for validations of the field.
 */

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '95%',
  },
}));

const Field = (props) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel>Password</InputLabel>
      <Input
        fullWidth
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        {...field}
        {...props}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={handleClickShowPassword}>
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error ? (
        <div className='error' style={{ color: 'red' }}>
          {meta.error}
        </div>
      ) : null}
    </FormControl>
  );
};

export default Field;
