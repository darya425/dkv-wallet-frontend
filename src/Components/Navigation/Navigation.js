import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EuroIcon from '@mui/icons-material/Euro';

import styles from './Navigation.module.scss';
import muiTheme from '../UI/muiTheme';

const iconSize = {
    mobile: 27,
    higher: 12,
};

const sxValues = {
    fontSize: iconSize.mobile,
    [muiTheme.breakpoints.up('tablet')]: {
        fontSize: iconSize.higher,
    },
}


export default function Navigation() {
    return (
        <nav className={styles.navContainer}>
            <NavLink
                to="/"
                exact={true}
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                <HomeIcon
                    sx={sxValues}
                />                    
            </NavLink>

            <NavLink                    
                to="/statistics"
                exact={true}
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                <QueryStatsIcon
                    sx={sxValues}
                />
            </NavLink>

            <NavLink                
                to="/currency"
                exact={true}
                className={styles.link+' '+styles.hidden}
                activeClassName={styles.activeLink}
            >
                <EuroIcon
                    sx={sxValues}
                />
            </NavLink>
        </nav>      
    );    
}
