import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
    setValues,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      showPassword: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required field')
        .email('Email must be correct'),
      password: Yup.string()
        .min(6, 'Must be equal 6 characters or more')
        .max(12, 'Must be equal 12 characters or less')
        .required('Required field'),
      showPassword: Yup.bool().default('false'),
    }),
    onSubmit: async ({ email, password}) => {
      await dispatch(authOperations.logIn({ email, password}));
      await push('/home');
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
          sx={{ marginBottom: "40px", minWidth: "100%" }}
          variant="standard"
          name="email"
          type="email"
          values={values.email}
          onBlur={handleBlur}
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
          sx={{ marginBottom: "40px", minWidth: "100%" }}
          variant="standard"
          type={values.showPassword ? 'text' : 'password'}
          name="password"
          values={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Enter your password"
          helperText={touched.password && errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={{ color: '#E0E0E0' }}
                  type="bool"
                  name="showPassword"
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setValues(prev => ({ showPassword: !prev.showPassword }))
                  }
                  onMouseDown={e => e.preventDefault()}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className={styles.btnWrapper}>
          <Button className={styles.btn}
            variant="contained"
            color="primary"
            type="submit"
            style={{
              marginBottom: 20,
              width: '100%',
              maxWidth: 280,
              borderRadius: 20,
              padding: '13px 68px',
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