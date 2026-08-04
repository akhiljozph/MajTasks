import { AppBar, Toolbar, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import styles from "./navbar-layout.module.scss";

function NavbarLayout() {
    return (
        <AppBar position="static" sx={{ width: "100%", display: "flex", flexDirection: "row" }}>

            <Toolbar sx={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>

            <Typography variant='h4' sx={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", fontWeight: 700 }}>
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
