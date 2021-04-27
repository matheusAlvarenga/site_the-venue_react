import React from "react";

import Carrousel from "./Carousel";
import Timer from "./TimeCounter";

export default function Featured() {
    return (
        <div>
            <Carrousel></Carrousel>
            <div className="artist_name">
                <div className="wrapper">Ariana Grande</div>
            </div>
            <Timer></Timer>
        </div>
    );
}
