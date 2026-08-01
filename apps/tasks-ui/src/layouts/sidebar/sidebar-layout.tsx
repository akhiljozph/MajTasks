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
                    <h2 id="your-work-heading">Your Work</h2>
                    <ul aria-labelledby="your-work-heading">
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/notes">Notes</a>
                        </li>
                        <li>
                            <a href="/canvas">Canvas</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 id="account-heading" className="sr-only">
                        Account
                    </h2>
                    <ul aria-labelledby="account-heading">
                        <li>
                            <a href="/account">Account</a>
                        </li>
                        <li>
                            <a href="/settings">Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Drawer>
    )
}

export default SidebarLayout;
