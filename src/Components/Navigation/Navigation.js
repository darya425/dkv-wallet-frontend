import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EuroIcon from '@mui/icons-material/Euro';

import styles from './Navigation.module.scss';
import muiTheme from '../UI/muiTheme';

const iconSize = {
    mobile: 27,
    higher: 18,
};

const sxValues = {
    paddingTop: "2px",
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
                exact
                className={styles.link}            
                activeClassName={styles.activeLink}
            >
                <div className={styles.icon}>
                    <HomeIcon
                        sx={sxValues}
                    />
                </div>
                <h3 className={styles.navText+' '+styles.hiddenText}>Main</h3>
            </NavLink>

            <NavLink                    
                to="/statistics"
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
            >
                <div className={styles.icon}>
                    <QueryStatsIcon
                        sx={sxValues}
                    />
                </div>                
                <h3 className={styles.navText+' '+styles.hiddenText}>Statistics</h3>
            </NavLink>

            <NavLink                
                to="/currency"
                exact
                className={styles.link+' '+styles.hidden}
                activeClassName={styles.activeLink}
            >
                <div className={styles.icon}>
                    <EuroIcon
                        sx={sxValues}
                    />
                </div>
            </NavLink>
        </nav>      
    );    
}
