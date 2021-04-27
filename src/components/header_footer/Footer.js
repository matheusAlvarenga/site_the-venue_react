import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
    return (
        <footer className="bck_red">
            <Fade triggerOnce>
                <div className="font_righteous footer_logo_venue">
                    The venue
                </div>
                <div className="footer_copyright">
                    The venue 2021 all right reserved
                </div>
            </Fade>
        </footer>
    );
}
