import { Drawer } from "@mui/material";

const DRAWER_WIDTH = 240;

function SidebarLayout() {
    return (
        <Drawer
            open
            variant="permanent"
            anchor="left"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                height: "100%",
                [`& .MuiDrawer-paper`]: {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                    position: "relative",
                    height: "100%",
                },
            }}
        >
            <nav aria-label="Main">
                <div>
                    <p>Your Work</p>
                    <p>Recents</p>
                    <p>Starred</p>
                    <p>Projects</p>
                    <p>Notes</p>
                    <p>Canvas</p>
                    <p>Dashboard</p>
                    <p>Account</p>
                    <p>Settings</p>
                </div>
            </nav>
        </Drawer>
    )
}

export default SidebarLayout;
