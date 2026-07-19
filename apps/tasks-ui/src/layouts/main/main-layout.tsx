import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import SidebarLayout from "../sidebar/sidebar-layout";
import NavbarLayout from "../navbar/navbar-layout";

export function Component() {
    return (
        <Box>
            <NavbarLayout />
            <SidebarLayout />
            <Outlet />
        </Box>
    );
}