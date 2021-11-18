import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import incomesIcon from '../ButtonAddTransaction/images/add-icon.svg';
import expencesIcon from './images/icon.svg';

const Switcher = styled(Switch)(() => ({
  width: 90,
  height: 50,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0)',
    '&.Mui-checked': {
      transform: 'translate(38px,1px)',
      '& .MuiSwitch-thumb': {
        backgroundColor: "#FF6596",
      },
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${expencesIcon})`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: "#fff",
        border: "1px solid #E0E0E0",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: "#24CCA7",
    width: 44,
    height: 44,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${incomesIcon})`,
    },
  },
  '& .MuiSwitch-track': {
    width: 80,
    height: 40,
    opacity: 1,
    backgroundColor: "#fff",
    borderRadius: 30,
    border: "1px solid #E0E0E0",
  },
}));

export default Switcher;