import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrollHeader, setScrollHeader] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrollHeader(true);
        } else {
            setScrollHeader(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: scrollHeader ? "#2f2f2f" : "transparent",
                    boxShadow: "none",
                    padding: "10px 0",
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">
                            The venue
                        </div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>

                    <IconButton
                        onClick={() => {
                            toggleDrawer(true);
                        }}
                        aria-label="Menu"
                        color="inherit"
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>

                    <SideDrawer
                        onClose={(value) => {
                            toggleDrawer(value);
                        }}
                        state={drawerOpen}
                    ></SideDrawer>
                </Toolbar>
            </AppBar>
        </>
    );
}
