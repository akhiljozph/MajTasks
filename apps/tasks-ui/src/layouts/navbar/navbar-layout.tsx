import { AppBar } from "@mui/material";

function NavbarLayout() {
    return (
        <AppBar position="static" sx={{ width: "100%" }}>
            <p>Collapse</p>
            <p>Icon</p>
            <p>Search</p>
            <p>Notification</p>
            <p>Help</p>
            <p>Settings</p>
            <p>Profile</p>
        </AppBar>
    )
}

export default NavbarLayout;
