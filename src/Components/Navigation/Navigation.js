import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EuroIcon from '@mui/icons-material/Euro';

import styles from './Navigation.module.scss';

const iconSize = 27;

export default function Navigation() {
    return (
        <div className={styles.navContainer}>
            <nav >
                <NavLink
                    to="/"
                    exact={true}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    <HomeIcon
                        sx={{ fontSize: iconSize }}
                    />
                </NavLink>

                <NavLink                    
                    to="/statistics"
                    exact={true}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    <QueryStatsIcon
                        sx={{ fontSize: iconSize }}
                    />
                </NavLink>

                <NavLink                
                    to="/currency"
                    exact={true}
                    className={styles.link}
                    activeClassName={styles.activeLink}
                >
                    <EuroIcon
                        sx={{ fontSize: iconSize }}
                    />
                </NavLink>
            </nav>
        </div>        
    );    
}
