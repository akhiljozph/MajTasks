import { AppBar, Toolbar, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import styles from "./navbar-layout.module.scss";

function NavbarLayout() {
    return (
        <AppBar position="static" className={styles.navbar}>
            <Toolbar className={styles.toolbar}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={styles.menuButton}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            <Typography variant='h4' className={styles.title}>
                MajTasks
            </Typography>

            {/* <p>Search</p>
            <p>Notification</p>
            <p>Help</p>
            <p>Settings</p>
            <p>Profile</p> */}
        </AppBar>
    )
}

export default NavbarLayout;
