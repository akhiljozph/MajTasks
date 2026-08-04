import {
    AppBar,
    Avatar,
    IconButton,
    InputAdornment,
    InputBase,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import { RoutePaths } from "../../routes/route-paths";
import styles from "./navbar-layout.module.scss";

type NavbarLayoutProps = {
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
};

function NavbarLayout({ sidebarOpen, onToggleSidebar }: NavbarLayoutProps) {
    return (
        <AppBar position="static" elevation={0} className={styles.navbar}>
            <Toolbar disableGutters className={styles.toolbar}>
                <Stack component="section" direction="row" className={styles.leftSide}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label={sidebarOpen ? "Collapse navigation menu" : "Expand navigation menu"}
                        aria-expanded={sidebarOpen}
                        aria-controls="app-sidebar"
                        className={styles.iconButton}
                        onClick={onToggleSidebar}
                    >
                        {sidebarOpen ? <MenuIcon /> : <MenuOpenIcon />}
                    </IconButton>

                    <Typography
                        component={RouterLink}
                        to={RoutePaths.APP.DASHBOARD}
                        className={styles.title}
                    >
                        Maj<span className={styles.titleAccent}>Tasks</span>
                    </Typography>
                </Stack>

                <section className={styles.middleSide} aria-label="Search">
                    <InputBase
                        placeholder="Search projects, notes, and more…"
                        className={styles.search}
                        inputProps={{ "aria-label": "Search MajTasks" }}
                        startAdornment={
                            <InputAdornment position="start" className={styles.searchIcon}>
                                <SearchOutlinedIcon fontSize="small" />
                            </InputAdornment>
                        }
                    />
                </section>

                <Stack component="section" direction="row" className={styles.rightSide}>
                    <IconButton
                        size="large"
                        aria-label="Notifications"
                        className={styles.iconButton}
                    >
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="Help"
                        className={`${styles.iconButton} ${styles.desktopOnly}`}
                    >
                        <HelpOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="Settings"
                        className={`${styles.iconButton} ${styles.tabletUp}`}
                    >
                        <SettingsOutlinedIcon />
                    </IconButton>

                    <IconButton
                        component={RouterLink}
                        to={RoutePaths.APP.PROFILE}
                        aria-label="Open profile"
                        className={styles.avatarButton}
                    >
                        <Avatar className={styles.avatar}>AK</Avatar>
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default NavbarLayout;
