import React from "react";
import { Element } from "react-scroll";

import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured/Index";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";

function App() {
    return (
        <div className="App">
            <Header></Header>

            <Element name="featured">
                <Featured />
            </Element>

            <Element name="venuenfo">
                <VenueNfo />
            </Element>

            <Element name="highlights">
                <Highlights />
            </Element>

            <Element name="pricing">
                <Pricing />
            </Element>

            <Element name="location">
                <Location />
            </Element>

            <Footer></Footer>
        </div>
    );
}

export default App;
