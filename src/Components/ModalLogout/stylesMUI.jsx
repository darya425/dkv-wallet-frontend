import { makeStyles } from '@material-ui/core/styles';
import muiTheme from '../UI/muiTheme';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    zIndex: '1',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 5, 5),
   
    [muiTheme.breakpoints.up('tablet')]: {
      width: '540px',
      height: '340px'
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
}));

export default useStyles;
