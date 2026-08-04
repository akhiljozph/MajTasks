import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import SidebarLayout from "../sidebar/sidebar-layout";
import NavbarLayout from "../navbar/navbar-layout";
import styles from "./main-layout.module.scss";

export function MainLayout() {
    const theme = useTheme();
    const isCompact = useMediaQuery(theme.breakpoints.down("md"));
    const [sidebarOpen, setSidebarOpen] = useState(!isCompact);

    useEffect(() => {
        setSidebarOpen(!isCompact);
    }, [isCompact]);

    const handleToggleSidebar = () => {
        setSidebarOpen((open) => !open);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Box className={styles.shell}>
            <NavbarLayout
                sidebarOpen={sidebarOpen}
                onToggleSidebar={handleToggleSidebar}
            />
            <Box className={styles.body}>
                <SidebarLayout
                    open={sidebarOpen}
                    isCompact={isCompact}
                    onClose={handleCloseSidebar}
                />
                <Box
                    component="main"
                    className={`${styles.main} ${isCompact ? styles.mainCompact : ""}`.trim()}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
