import React from "react";
import "./Footer.scss";
import Typical from "react-typical";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Welcome to our About page! We are passionate about bringing the latest
                     and greatest audio and smart devices to our valued customers.
                      With a focus on quality and innovation, we curate a selection of headphones, speakers, 
                      smartwatches, and Bluetooth devices that cater to your lifestyle and elevate your tech game.
                       Our team is dedicated to providing exceptional customer service, ensuring your 
                       satisfaction with every purchase. Explore our collection and join us on this exciting journey into the world of cutting-edge technology.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            station Rd, Khutauna, MadhuBani, Bihar,
                            India, 847227
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91-99 39 54 75 46</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">srt@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                      
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;