import React from "react";
import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

export default function SideDrawer(props) {
    const links = [
        { where: "featured", value: "TO TOP" },
        { where: "venuenfo", value: "VENUE NFO" },
        { where: "highlights", value: "HIGHLIGHTS" },
        { where: "pricing", value: "PRICING" },
        { where: "location", value: "LOCATION" },
    ];

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150,
        });
        props.onClose(false);
    };

    const renderItem = (item) => (
        <ListItem
            button
            onClick={() => scrollToElement(item.where)}
            key={item.where}
        >
            {item.value}
        </ListItem>
    );

    return (
        <Drawer
            anchor="right"
            onClose={() => {
                props.onClose(false);
            }}
            open={props.state}
        >
            <List component="nav">{links.map((item) => renderItem(item))}</List>
        </Drawer>
    );
}
