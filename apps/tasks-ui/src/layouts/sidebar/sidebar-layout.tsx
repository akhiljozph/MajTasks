import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import type { SvgIconComponent } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

import { RoutePaths } from "../../routes/route-paths";
import styles from "./sidebar-layout.module.scss";

const DRAWER_WIDTH = 240;

type NavItem = {
    label: string;
    icon: SvgIconComponent;
    to?: string;
};

type NavSection = {
    id: string;
    label: string;
    items: NavItem[];
};

const NAV_SECTIONS: NavSection[] = [
    {
        id: "work",
        label: "Work",
        items: [
            { label: "Your Work", icon: AssignmentIndOutlinedIcon },
            { label: "Recent", icon: HistoryOutlinedIcon },
            { label: "Starred", icon: StarBorderOutlinedIcon },
        ],
    },
    {
        id: "spaces",
        label: "Spaces",
        items: [
            { label: "Projects", icon: FolderOutlinedIcon },
            { label: "Dashboard", icon: DashboardOutlinedIcon, to: RoutePaths.APP.DASHBOARD },
        ],
    },
    {
        id: "create",
        label: "Create",
        items: [
            { label: "Notes", icon: StickyNote2OutlinedIcon },
            { label: "Canvas", icon: BrushOutlinedIcon },
        ],
    },
];

type SidebarLayoutProps = {
    open: boolean;
    isCompact: boolean;
    onClose: () => void;
};

function SidebarLayout({ open, isCompact, onClose }: SidebarLayoutProps) {
    const { pathname } = useLocation();
    const width = isCompact ? DRAWER_WIDTH : open ? DRAWER_WIDTH : 0;

    return (
        <Drawer
            id="app-sidebar"
            open={open}
            variant={isCompact ? "temporary" : "permanent"}
            anchor="left"
            onClose={onClose}
            className={`${styles.drawer} ${!open && !isCompact ? styles.drawerCollapsed : ""}`.trim()}
            ModalProps={{ keepMounted: true }}
            sx={{
                width: isCompact ? undefined : width,
                flexShrink: 0,
                height: isCompact ? undefined : "100%",
                transition: isCompact ? undefined : "width 200ms ease",
                [`& .MuiDrawer-paper`]: {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                    ...(isCompact
                        ? {
                            top: "3.5rem",
                            height: "calc(100dvh - 3.5rem)",
                        }
                        : {
                            position: "relative",
                            height: "100%",
                            top: "auto",
                            width,
                            overflowX: "hidden",
                            transition: "width 200ms ease",
                            borderRightWidth: open ? undefined : 0,
                        }),
                },
            }}
            slotProps={{
                paper: {
                    className: `${styles.paper} ${isCompact ? styles.paperCompact : styles.paperDesktop}`.trim(),
                    elevation: isCompact ? 8 : 0,
                    "aria-hidden": !open,
                },
            }}
        >
            <nav aria-label="Main" className={styles.nav} hidden={!open}>
                {NAV_SECTIONS.map((section, index) => (
                    <section
                        key={section.id}
                        className={styles.section}
                        aria-labelledby={`sidebar-section-${section.id}`}
                    >
                        {index > 0 && <div className={styles.divider} role="separator" />}
                        <Typography
                            id={`sidebar-section-${section.id}`}
                            component="h2"
                            className={styles.sectionLabel}
                        >
                            {section.label}
                        </Typography>
                        <List disablePadding className={styles.list}>
                            {section.items.map((item) => {
                                const Icon = item.icon;
                                const selected = Boolean(item.to && pathname.startsWith(item.to));

                                return (
                                    <ListItemButton
                                        key={item.label}
                                        className={styles.item}
                                        selected={selected}
                                        tabIndex={open ? 0 : -1}
                                        onClick={() => {
                                            if (isCompact) {
                                                onClose();
                                            }
                                        }}
                                        {...(item.to
                                            ? {
                                                component: NavLink,
                                                to: item.to,
                                            }
                                            : {})}
                                    >
                                        <ListItemIcon className={styles.itemIcon}>
                                            <Icon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.label}
                                            slotProps={{
                                                primary: { className: styles.itemLabel },
                                            }}
                                        />
                                    </ListItemButton>
                                );
                            })}
                        </List>
                    </section>
                ))}
            </nav>
        </Drawer>
    );
}

export default SidebarLayout;
