import React from "react";
import Typical from "react-typical";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            `Welcome to our one-stop shop for all your audio and smart device needs! Immerse yourself in a world of high-quality sound with our wide range of headphones and speakers`,
                              1000,
                              `Unleash the power of sound and stay connected with our premium selection of headphones, speakers, smartwatches, and Bluetooth devices – the perfect companions for a tech-savvy lifestyle.`,
                              1000,
                              `Experience audio excellence and seamless connectivity with our exceptional range of headphones, speakers, smartwatches, and Bluetooth devices. Elevate your tech game and stay ahead with our cutting-edge collection.`,
                              1000,
                        ]}
                        />

                        
                    </h1>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;