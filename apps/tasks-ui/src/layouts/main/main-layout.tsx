import { Box } from "@mui/material";

import SidebarLayout from "../sidebar/sidebar-layout";
import NavbarLayout from "../navbar/navbar-layout";

const MainLayout: React.FC = () => {
    return (
        <Box>
            <NavbarLayout />
            <SidebarLayout />
        </Box>
    );
};

export default MainLayout;