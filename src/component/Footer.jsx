// CSS
import './Footer.css'

import $ from 'jquery'

// img
import logo from './img/logo.png';
import insta1 from './img/insta1.jpg';
import insta2 from './img/insta2.jpg';
import insta3 from './img/insta3.jpg'
import insta4 from './img/insta4.jpg'
import insta5 from './img/insta5.jpg'

// icon
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaPaperPlane, FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter, FaDribbble } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { BiUpArrowAlt } from 'react-icons/bi';

const Footer = () => {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    
    

    return (
        <>
            <footer className='position-relative'>
                <Container>
                    <Row className="footer-top position-relative">

                        <Col xl={4} lg={6} sm={12} xs={12} className='my-2 cr-footer-border'>
                            <div className="footer-logo">
                                <div className='footer-image'>
                                    <img src={logo} alt="logo" />
                                </div>
                                <p className='footer-content'>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                            </div>
                            <div className="cr-footer">
                                <ul className="cr-footer-links">
                                    <li className='location-icon position-relative'>
                                        <CiLocationOn className='footerlocation' />
                                        51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                    </li>
                                    <li className='mail-icon position-relative'>
                                        <CiMail className='footermail' />
                                        <a href="#">example@email.com</a>
                                    </li>
                                    <li className='call-icon position-relative'>
                                        <IoCallOutline className='footercall' />
                                        <a href="#"> +91 123 4567890</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col xl={2} lg={6} sm={12} xs={12} className='my-2 cr-footer-border'>
                            <div className="cr-footer">
                                <h4 className="cr-sub-title fw-bold">Company</h4>
                                <ul className='cr-footer-links'>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivery Information</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Support Center</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col xl={2} lg={6} sm={12} xs={12} className='my-2 cr-footer-border'>
                            <div className="cr-footer">
                                <h4 className="cr-sub-title fw-bold">Category</h4>
                                <ul className='cr-footer-links'>
                                    <li>
                                        <a href="#">Dairy & Bakery</a>
                                    </li>
                                    <li>
                                        <a href="#">Fruits & Vegetable</a>
                                    </li>
                                    <li>
                                        <a href="#">Snack & Spice</a>
                                    </li>
                                    <li>
                                        <a href="#">Juice & Drinks</a>
                                    </li>
                                    <li>
                                        <a href="#">Chicken & Meat</a>
                                    </li>
                                    <li>
                                        <a href="#">Fast Food</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col xl={4} lg={6} sm={12} xs={12} className='my-2 cr-footer-border'>
                            <div className="cr-footer">
                                <h4 className='cr-sub-title fw-bold'>Subscribe Our Newsletter</h4>
                                <div className='cr-footer-links'>
                                    <form className='cr-search-footer'>
                                        <input type="text" placeholder='search here...' />
                                        <a href="#" className='search-btn d-flex align-items-center justify-content-center'>
                                            <FaPaperPlane className='plane' />
                                        </a>
                                    </form>
                                </div>
                                <div className="cr-social-media d-flex flex-row">
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <RiFacebookLine />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <FaXTwitter />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <FaDribbble />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <FaInstagram />
                                        </a>
                                    </span>
                                </div>

                                <div>
                                    <div className="insta mx-auto position-relative overflow-hidden p-0 z-1">
                                        <div className='position-relative z-1 d-flex'>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src={insta1} alt="insta1" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src={insta2} alt="insta2" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src={insta3} alt="insta3" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src={insta4} alt="insta4" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src={insta5} alt="insta5" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <div className="footer-bottom text-center">
                        <p>
                            &copy; <span>2025</span>
                            <a href="#"> Carrot</a>, All rights reserved.
                        </p>
                    </div>
                </Container>
            </footer>

            {/* bottom to top */}
            <a href='#Top' className='back-to-top' style={{display: "inline"}}> 
                <BiUpArrowAlt className='top' />
                <div className="back-to-top-wrap active-progress">
                    <svg viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: "stroke-dashoffset 10ms linear", strokeDasharray: "307.919, 307.919", strokeDashoffset: "0"}}></path>
                    </svg>
                </div>
            </a>
            
        </>
    )
}

export default Footer;