import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';

import styles from './LoginForm.module.scss';
import logo from '../RegistrationForm/icons/logo.png';

const LoginForm = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required field')
        .email('Email must be correct'),
      password: Yup.string()
        .min(6, 'Must be equal 6 characters or more')
        .max(12, 'Must be equal 12 characters or less')
        .required('Required field'),
    }),
    onSubmit: ({ email, password}) => {
      dispatch(authOperations.logIn({ email, password}));
      push('/home');
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="wallet" />
        <h1 className={styles.text}>Wallet</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          sx={{
            '&.MuiTextField-root': { m: 2},
          }}
          fullWidth
          variant="standard"
          name="email"
          type="email"
          values={values.email}
          // onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
          }}
          helperText={touched.email && errors.email}
        />
        <TextField
          sx={{
            '&.MuiTextField-root': { m: 2 },
          }}
          fullWidth
          variant="standard"
          type="password"
          name="password"
          values={values.password}
          // onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your password"
          helperText={touched.password && errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            )
          }}
        />
        <div className={styles.btnWrapper}>
          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: '#24CCA7',
              marginTop: 20,
              marginBottom: 20,
              width: '100%',
              maxWidth: 280,
              borderRadius: 20,
              padding: '13px 68px',
              fontSize: 18,
              lineHeight: 1.3,
            }}
          >
            Sign in
          </Button>
          <Link to={'/register'} className={styles.linkBtn}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm; 