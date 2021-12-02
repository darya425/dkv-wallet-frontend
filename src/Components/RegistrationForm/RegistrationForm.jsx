import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountBox from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';

import styles from './RegistrationForm.module.scss';
import logo from './icons/logo.png';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  let push = useNavigate();

  const {
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,

  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
      name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required field')
        .email('Email must be correct'),
      password: Yup.string()
        .min(6, 'Must be equal 6 characters or more')
        .max(12, 'Must be equal 12 characters or less')
        .required('Required field'),
      confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .min(6, 'Must be equal 6 characters or more')
        .max(12, 'Must be equal 12 characters or less')
        .required('Required field'),
      name: Yup.string()
        .min(1, 'Enter your name')
        .max(12, 'Enter 12 symbols or less')
        .required('Required field'),
    }),
    onSubmit: ({ email, password, name }) => {
      dispatch(authOperations.register({ email, password, name }));
      push('/login');
    },
  });

  const setRangeValue = (data, touched) => {
    const countOfTouchedEl = Object.values(touched).length;
    if (!countOfTouchedEl) {
      return;
    }
    const totalValidationValue = 4;
    const totalcountErr = Object.values(data).filter(
      valueErr => valueErr !== '',
    ).length;
    return totalValidationValue - totalcountErr;
  };

  const valuesRange = setRangeValue(errors, touched);
  
  return (
    <div className={styles.сontainer}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="wallet" />
        <h1 className={styles.text}>Wallet</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          sx={{
            '&.MuiTextField-root': { m: 2 },
          }}
          fullWidth
          variant="standard"
          name="email"
          type="email"
          onBlur={handleBlur}
          values={values.email}
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
          onBlur={handleBlur}
          values={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
          }}
          helperText={touched.password && errors.password}
        />
          <TextField
            sx={{
              '&.MuiTextField-root': { m: 2},
            }}
            fullWidth
            variant="standard"
            type="password"
          name="confirm"
          onBlur={handleBlur}
            values={values.confirm}
            onChange={handleChange}
            placeholder="Confirm your password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon htmlColor="#E0E0E0" />
                </InputAdornment>
              ),
            }}
            helperText={touched.confirm && errors.confirm}
          />
          <div className={styles.progressbar}>
            <progress
              min="0"
              max="4"
              value={valuesRange}
              id="progress"
            ></progress>
          </div>
        <TextField
          sx={{
            '&.MuiTextField-root': { m: 2 },
          }}
          fullWidth
          variant="standard"
          type="text"
          name="name"
          onBlur={handleBlur}
          values={values.name}
          onChange={handleChange}
          placeholder="Enter you name"
          helperText={touched.name && errors.name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBox htmlColor="#E0E0E0" />
              </InputAdornment>
            ),
          }}
        />
        <div className={styles.btnWrapper}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{
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
            Sign up
          </Button>
          <Link to={'/login'} className={styles.linkBtn}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
