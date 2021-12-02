import { makeStyles } from '@material-ui/core/styles';
import muiTheme from '../UI/muiTheme';
import { styled } from '@mui/system';

export const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    marginTop: '60px',
  
    [muiTheme.breakpoints.up('tablet')]: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  paper: {
    backgroundColor: "#fff",
    padding: "20px",
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
   
    [muiTheme.breakpoints.up('tablet')]: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '540px',
      height: '617px',
      borderRadius: "20px",
      paddingTop: '40px',
      paddingRight: '65px',
      paddingLeft: '65px',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  textField: {
    width: '100%',

    [muiTheme.breakpoints.up('tablet')]: {
      width: '190px',
    },
  },
}));

export const Backdrop = styled('div')({
  zIndex: -1,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0)",
  [muiTheme.breakpoints.up('tablet')]: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
});
