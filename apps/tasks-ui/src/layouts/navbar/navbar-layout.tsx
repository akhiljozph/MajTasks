import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

import styles from "./navbar-layout.module.scss";

function NavbarLayout() {
    return (
        <AppBar position="static" className={styles.navbar}>
            <Stack component="section" className={styles.leftSide}>
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
            </Stack>

            {/* <section className={styles.middleSide}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </section> */}

            <Stack component="section" className={styles.rightSide}>
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={styles.notificationsIcon}
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={styles.infoIcon}
                    >
                        <InfoIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={styles.settingsIcon}
                    >
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>

                <Avatar sx={{ bgcolor: deepPurple[500] }}>AK</Avatar>
            </Stack>
        </AppBar >
    )
}

export default NavbarLayout;
