import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import SidebarLayout from "../sidebar/sidebar-layout";
import NavbarLayout from "../navbar/navbar-layout";

export function MainLayout() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <NavbarLayout />
            <Box sx={{ display: "flex", flex: 1, minHeight: 0, overflow: "hidden" }}>
                <SidebarLayout />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, overflow: "auto" }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
