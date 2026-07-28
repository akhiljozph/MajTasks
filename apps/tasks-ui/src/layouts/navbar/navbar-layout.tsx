import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function NavbarLayout() {
    return (
        <AppBar position="static" sx={{ width: "100%" }}>
            <Toolbar>
                <IconButton color="inherit" edge="start">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarLayout;
