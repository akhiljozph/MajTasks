import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function NavbarLayout() {
    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavbarLayout;