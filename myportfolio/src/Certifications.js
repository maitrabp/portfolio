import React from 'react'
import Slider from "react-slick";
import Certificate from './Certificate';

export default function Certifications() {
    var settings = {
      arrows: true,
      focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              infinite: true,
              speed: 1000,
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
          {
            breakpoint: 1250,
            settings: {
              infinite: true,
              speed: 1000,
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
          {
            breakpoint: 992,
            settings: {
              infinite: true,
              speed: 1000,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div id="Certifications">
            <div className="mainTitle">Certifications</div>
                <div
                    className="container-fluid"
                    style={{
                        backgroundColor: "white",
                        borderTop: "8px solid black",
                        borderBottom: "8px solid black",
                        textAlign: "center",
                    }}
                >
                 <div className="innerSliderCertificateContainer">
                    <Slider {...settings}>
                        <Certificate certificate="AWSCCP.png"/>
                        <Certificate certificate="AI_SupplyChainAnalytics.jpg"/>
                        <Certificate certificate="MatlabSimscapeWebinar.png"/>
                        <Certificate certificate="MatlabFeaturesSeminar.png"/>
                        <Certificate certificate="MatlabOnRamp.png"/>
                    </Slider>
                 </div>
            </div>
        </div>
    )
}
