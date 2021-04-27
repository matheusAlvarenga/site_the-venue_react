import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide_one from "../../resources/images/slide_one.jpg";
import Slide_two from "../../resources/images/slide_two.jpg";
import Slide_three from "../../resources/images/slide_three.jpg";

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div
            className="carrousel_wrapper"
            style={{ height: `${window.innerHeight}px` }}
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${Slide_one})`,
                            height: `${window.innerHeight}px`,
                            width: "100%",
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${Slide_two})`,
                            height: `${window.innerHeight}px`,
                            width: "100%",
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${Slide_three})`,
                            height: `${window.innerHeight}px`,
                            width: "100%",
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    );
}
