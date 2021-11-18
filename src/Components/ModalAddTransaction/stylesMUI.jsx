import { makeStyles } from '@material-ui/core/styles';
import muiTheme from '../UI/muiTheme';

const useStyles = makeStyles((theme) => ({
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
    zIndex: '1',
    boxShadow: theme.shadows[5],
    padding: "20px",
    width: "100vw",
   
    [muiTheme.breakpoints.up('tablet')]: {
      width: '540px',
      maxHeight: '617px',
      borderRadius: "20px",
      paddingTop: '40px',
      paddingRight: '65px',
      paddingLeft: '65px',
      paddingBottom: '60px',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  textField: {
    width: '100%',
    marginBottom: '40px',

    [muiTheme.breakpoints.up('tablet')]: {
      width: '190px',
    },
  },
}));

export default useStyles;