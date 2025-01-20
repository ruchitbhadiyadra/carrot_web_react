// CSS
import './Home.css';

import $ from 'jquery';

// import react from react
import { useState } from 'react';
import { Row, Col, Tab } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';

// img
import cake from './img/cake.jpg';
import milk from './img/milk.jpg';
import fishmeat from './img/fishmeat.jpg';
import freshmeat from './img/freshmeat.jpg';
import coriander from './img/coriander.jpg';
import broccoli from './img/broccoli.jpg';
import apple from './img/apple.jpg';
import mango from './img/mango.jpg';
import strawberry from './img/strawberry.jpg';
import strawberry1 from './img/strawberry1.jpg';
import productbanner from './img/product-banner.jpg';
import card5 from './img/card5.jpg';
import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card7 from './img/card7.jpg';
import card8 from './img/card8.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';
import productbanner1 from './img/product-banner1.jpg';
import productbanner2 from './img/product-banner2.jpg';
import productbanner3 from './img/product-banner3.jpg';
import productsrightview from './img/products-rightview.jpg';
import testimonial1 from './img/testimonial1.jpg';
import testimonial2 from './img/testimonial2.jpg';
import testimonial3 from './img/testimonial3.jpg';
import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';

// icon
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiRedPacketLine, RiCustomerService2Line, RiTruckLine, RiMoneyDollarBoxLine, RiFacebookLine } from "react-icons/ri";



function makeTimer() {
    var endTime = new Date("29 December 2024 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date();
    now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
};
setInterval(function () { makeTimer(); }, 1000);

const Home = () => {
    // const [show, setShow] = useState(false);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <>
            {/* banner */}
            <Carousel activeIndex={index} onSelect={handleSelect} className='pb-100'>
                <Carousel.Item>
                    <div className='banner'>
                        <Container className='container'>
                            <Row>
                                <div className="col-lg-12">
                                    <div className='cr-left-side-contain'>
                                        <h5>
                                            <span>100% </span>
                                            Organic Fruits
                                        </h5>
                                        <h1>Explore fresh & juicy fruits.</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                                        <div className='cr-last-buttons'>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='banner1'>
                        <Container className='container'>
                            <Row>
                                <div className="col-lg-12">
                                    <div className='cr-left-side-contain'>
                                        <h5>
                                            <span>100% </span>
                                            Organic Vegetables
                                        </h5>
                                        <h1>The best way to stuff your wallet.</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                                        <div className='cr-last-buttons'>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* Categories */}
            <section className='section-categories position-relative pb-100'>
                <Container>
                    <div className='row mb-minus-24'>
                        <Tab.Container defaultActiveKey="cake-milk">
                            <Row>
                                <Col sm={4}>
                                    <div className="cr-categories">
                                        <Nav variant="pills" className="flex-column nav nav-tabs">
                                            <Nav.Item className='nav-item'>
                                                <Nav.Link eventKey="cake-milk" className='nav-link active center-categories-inner' aria-selected="true" tabIndex={"0"}>Cake & Milk <span>(65 items)</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fresh-meat" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Fresh Meat <span>(30 items)</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="vegetables" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Vegetables <span>(25 items)</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="apple-mango" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Apple & Mango <span>(45 items)</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="strawberry" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Strawberry <span>(68 items)</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="view-more" className='center-categories-inner cr-view-more'>View More</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="cake-milk">
                                            <Row className='mb-minus-24'>
                                                <Col md={6} className='mb-24'>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>50 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Cake</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={cake} />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>40 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Milk</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={milk} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fresh-meat">
                                            <Row className='mb-minus-24'>
                                                <Col md={6} className='mb-24'>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>35 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Fish Meat</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={fishmeat} />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>24 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Fresh Meat</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={freshmeat} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vegetables">
                                            <Row className='mb-minus-24'>
                                                <Col md={6} className='mb-24'>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>45 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Coriander</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={coriander} />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>20 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Broccoli</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={broccoli} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="apple-mango">
                                            <Row className='mb-minus-24'>
                                                <Col md={6} className='mb-24'>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>30 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Apple</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={apple} />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>25 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Mango</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={mango} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="strawberry">
                                            <Row className='mb-minus-24'>
                                                <Col md={6} className='mb-24'>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>33 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Strawberry</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={strawberry} />
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="cr-side-categories">
                                                        <div className="categories-inner">
                                                            <h4>15 <span><small>%</small><small>Off</small></span></h4>
                                                        </div>
                                                        <div className="categories-contain">
                                                            <div className="categories-text">
                                                                <h5>Strawberry</h5>
                                                            </div>
                                                            <div className="categories-button">
                                                                <button className="cr-button">shop now</button>
                                                            </div>
                                                        </div>
                                                        <img src={strawberry1} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="view-more">
                                            {/* <h3>View More</h3>
                                            <p>Additional categories can be shown here.</p> */}
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Container>
            </section>

            {/* Popular Product */}
            <section className='section-popular-product-shape pb-100 position-relative'>
                <Container className='container aos-init aos-animate'>
                    <Row>
                        <div className="col-lg-12">
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className='product-content mb-minus-24'>
                        <Tab.Container defaultActiveKey="all">
                            <Row>
                                <Col xl={3} lg={6} sm={4} xs={12} className='mb-24'>
                                    <div className="row mb-minus-24 position-sticky">
                                        
                                        <Col lg={12} sm={12} xs={12} className='cr-product-box mb-24'>
                                            <div className='cr-product-tabs'>
                                                <Nav variant="pills" className="flex-column nav nav-tabs">
                                                    <Nav.Item className='nav-item'>
                                                        <Nav.Link eventKey="all" className='nav-link active center-categories-inner' aria-selected="true" tabIndex={"0"}>All <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="snack" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Snack <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="vegetable" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Vegetable <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="fruit" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Fruit <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="bakery" className='nav-link center-categories-inner' aria-selected="false" tabIndex={"-1"}>Bakery <span><FaArrowRight /></span></Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                        </Col>

                                        <Col lg={12} sm={12} xs={12} className='cr-product-box banner-480 mb-24'>
                                            <div className='cr-ice-cubes'>
                                                <img src={productbanner} />
                                                <div className='cr-ice-cubes-contain'>
                                                    <h4 className="title">Juicy </h4>
                                                    <h5 className="sub-title">Fruits</h5>
                                                    <span>100% Natural</span>
                                                    <button className='cr-button'>Shop Now</button>
                                                </div>
                                            </div>
                                        </Col>

                                    </div>
                                </Col>
                                <Col xl={9} lg={6} sm={8} xs={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="all">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 vegetable'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card5} alt="card5" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Vegetables</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic villa farm lomon 500gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card1} alt="card1" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut pack 200gm</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$145</span>
                                                                <span className="old-price">$150</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 fruit'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card2} alt="card2" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic apple 1kg simla marming</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card7} alt="card7" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card8} alt="card8" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 fruit'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card3} alt="card3" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(3.2)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Organic fresh venila farm watermelon 5kg</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$50.30</span>
                                                                <span className="old-price">$72.60</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card4} alt="card4" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card7} alt="card7" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="snack">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card1} alt="card1" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut pack 200gm</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$145</span>
                                                                <span className="old-price">$150</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card8} alt="card8" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={3} className='mb-24 snack'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card4} alt="card4" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vegetable">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 vegetable'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card5} alt="card5" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Vegetables</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic villa farm lomon 500gm pack</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fruit">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 fruit'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card2} alt="card2" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(4.5)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Fresh organic apple 1kg simla marming</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$120.25</span>
                                                                <span className="old-price">$123.25</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={3} className='mb-24 fruit'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card3} alt="card3" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                    <p className='rate'>(3.2)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Organic fresh venila farm watermelon 5kg</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$50.30</span>
                                                                <span className="old-price">$72.60</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="bakery">
                                            <Row className='mb-minus-24'>
                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card7} alt="card7" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={3} className='mb-24 bakery'>
                                                    <div className="cr-product-card bg-white d-flex flex-column">
                                                        <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                            <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                                <img src={card7} alt="card7" className='img d-block m-auto' />
                                                            </div>
                                                            <div className="cr-side-view position-absolute d-grid opacity-0">
                                                                <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                    <FaRegHeart className='heart' />
                                                                </a>
                                                                <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                    <MdOutlineRemoveRedEye className='eye' />
                                                                </a>
                                                            </div>
                                                            <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                                <IoBagOutline className='bag' />
                                                            </a>
                                                        </div>
                                                        <div className="cr-product-details text-center overflow-hidden">
                                                            <div className="cr-brand">
                                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <p className='rate'>(5.0)</p>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                                            <p className="cr-price">
                                                                <span className="new-price">$20</span>
                                                                <span className="old-price">$22.10</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Container>
            </section>

            {/* Product Banner */}
            <section className='section-product-banner pb-100 position-relative'>
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className="cr-banner-slider">
                                <Carousel activeIndex={index} onSelect={handleSelect} className='swiper-wrapper'>
                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} xs={12} className='my-2'>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner1} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Healthy <br />
                                                                Bakery Products
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>30%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} xs={12} className='my-2'>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner2} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Fresh <br />
                                                                Snacks & Sweets
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>20%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} xs={12} className='my-2'>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner3} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Fresh & healthy <br />
                                                                Organic Fruits
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>35%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4}>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner1} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Healthy <br />
                                                                Bakery Products
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>30%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner2} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Fresh <br />
                                                                Snacks & Sweets
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>20%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner3} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Fresh & healthy <br />
                                                                Organic Fruits
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>35%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4}>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner1} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Healthy <br />
                                                                Bakery Products
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>30%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner2} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Fresh <br />
                                                                Snacks & Sweets
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>20%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4}>
                                                <div className='swiper-slide'>
                                                    <div className='cr-product-banner-image position-relative'>
                                                        <img src={productbanner3} />
                                                        <div className='cr-product-banner-contain d-flex flex-column align-items-baseline justify-content-center'>
                                                            <h5>
                                                                Fresh & healthy <br />
                                                                Organic Fruits
                                                            </h5>
                                                            <p>
                                                                <span className='percent'>35%</span>Off <span>on first order</span>
                                                            </p>
                                                            <div className="cr-product-banner-buttons">
                                                                <button className='cr-button'>shop now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* Services */}
            <section className='section-services pb-100 position-relative'>
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className="cr-banner-slider">
                                <Carousel activeIndex={index} onSelect={handleSelect} className='swiper-wrapper'>
                                    <Carousel.Item>
                                        <Row>
                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiRedPacketLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Product Packing</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiCustomerService2Line className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>24X7 Support</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiTruckLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Delivery in 5 Days</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiMoneyDollarBoxLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Payment Secure</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiRedPacketLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Product Packing</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiCustomerService2Line className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>24X7 Support</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiTruckLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Delivery in 5 Days</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiMoneyDollarBoxLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Payment Secure</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiRedPacketLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Product Packing</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiCustomerService2Line className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>24X7 Support</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiTruckLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Delivery in 5 Days</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={3} className='my-2'>
                                                <div className='swiper-slide position-relative'>
                                                    <div className="cr-services d-flex flex-column">
                                                        <div className="cr-services-image d-block">
                                                            <RiMoneyDollarBoxLine className='cr-services-img' />
                                                        </div>
                                                        <div className="cr-services-contain">
                                                            <h4 className='text-center'>Payment Secure</h4>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* Deal */}
            <section className='section-deal pb-100'>
                <div className='bg-banner-deal position-relative'>
                    <Container>
                        <Row>
                            <div className="col-12">
                                <div className="cr-deal-rightside d-flex flex-column justify-content-center">
                                    <div className="cr-deal-content text-start">
                                        <span>
                                            <code>35%</code> OFF
                                        </span>
                                        <h4 className='cr-deal-title'>Great deal on organic food.</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.</p>
                                        <div id="timer" className='cr-counter d-flex'>
                                            <div className="cr-counter-inner d-flex">
                                                <h4 className='position-relative d-grid text-center'>
                                                    <span id="days"></span>Days
                                                </h4>
                                                <h4 className='position-relative d-grid text-center'>
                                                    <span id="hours"></span>Hrs
                                                </h4>
                                                <h4 className='position-relative d-grid text-center'>
                                                    <span id="minutes"></span>Min
                                                </h4>
                                                <h4 className='position-relative d-grid text-center'>
                                                    <span id="seconds"></span>Sec
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </section>

            {/* Popular product */}
            <section className='section-popular pb-100 position-relative'>
                <Container>
                    <Row>

                        <div className='col-xxl-7 col-xl-6 col-lg-6 col-md-12'>
                            <div>
                                <Carousel activeIndex={index} onSelect={handleSelect} className='swiper-wrapper'>
                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card5} alt="card5" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card2} alt="card2" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card3} alt="card3" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card1} alt="card1" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card4} alt="card4" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card5} alt="card5" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <Row>
                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card5} alt="card5" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <p className='rate'>(4.5)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut mix pack 200gm</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card2} alt="card2" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={4} className='mb-24 snack'>
                                                <div className="cr-product-card bg-white d-flex flex-column">
                                                    <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                        <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                            <img src={card3} alt="card3" className='img d-block m-auto' />
                                                        </div>
                                                        <div className="cr-side-view position-absolute d-grid opacity-0">
                                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                                <FaRegHeart className='heart' />
                                                            </a>
                                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                                <MdOutlineRemoveRedEye className='eye' />
                                                            </a>
                                                        </div>
                                                        <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                                            <IoBagOutline className='bag' />
                                                        </a>
                                                    </div>
                                                    <div className="cr-product-details text-center overflow-hidden">
                                                        <div className="cr-brand">
                                                            <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                                            <div className="cr-star d-flex justify-content-center align-items-center">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <p className='rate'>(5.0)</p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="title d-flex justify-content-center">Sweet snakes crunchy nut mix 250gm pack</a>
                                                        <p className="cr-price">
                                                            <span className="new-price">$100.00</span>
                                                            <span className="old-price">$110.00</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>

                        <div className='col-xxl-5 col-xl-6 col-lg-6 col-md-12'>
                            <div className="cr-products-rightbar position-relative d-flex align-items-center">
                                <img src={productsrightview} />
                                <div className="cr-products-rightbar-content position-absolute end-0 top-0 bottom-0 d-flex flex-column justify-content-center">
                                    <h4 className='mb-0 text-end'>Organic & Healthy <br /> Vegetables</h4>
                                    <div className="cr-off d-flex justify-content-center">
                                        <span>25% <code>OFF</code></span>
                                    </div>
                                    <div className="rightbar-buttons d-flex justify-content-center">
                                        <button className='cr-button'>shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Row>
                </Container>
            </section>

            {/* Testimonial */}
            <section className='section-testimonial pb-100 position-relative'>
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className='mb-30'>
                                <div className="cr-banner">
                                    <h2>Great Words From People</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <div className="swiper-container">
                                <div className="swiper-wrapper cr-testimonial-pt-50">
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial1} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Co Founder</span>
                                                                <h4 className="title">Stephen Smith</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial2} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Manager</span>
                                                                <h4 className="title">Lorem Robinson</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial3} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Team Leader</span>
                                                                <h4 className="title">Saddika Alard</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial1} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Co Founder</span>
                                                                <h4 className="title">Stephen Smith</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial2} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Manager</span>
                                                                <h4 className="title">Lorem Robinson</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial3} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Team Leader</span>
                                                                <h4 className="title">Saddika Alard</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial1} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Co Founder</span>
                                                                <h4 className="title">Stephen Smith</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial2} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Manager</span>
                                                                <h4 className="title">Lorem Robinson</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”
                                                                </p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaRegStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-5'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-testimonial">
                                                            <div className="cr-testimonial-image position-absolute d-flex justify-content-center align-items-center">
                                                                <img src={testimonial3} />
                                                            </div>
                                                            <div className="cr-testimonial-inner">
                                                                <span>Team Leader</span>
                                                                <h4 className="title">Saddika Alard</h4>
                                                                <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                                                <div className="cr-star">
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                    <FaStar className='star' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* Blog */}
            <section className='section-blog pb-100 position-relative'>
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className='mb-30'>
                                <div className="cr-banner">
                                    <h2>Latest News</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Food</a>
                                                                </span>
                                                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog1} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        09 <code>sep</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Snacks</a>
                                                                </span>
                                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog3} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        12 <code>oct</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Vegetable</a>
                                                                </span>
                                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog2} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        22 <code>jan</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Vegetable</a>
                                                                </span>
                                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog2} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        22 <code>jan</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Food</a>
                                                                </span>
                                                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog1} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        09 <code>sep</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Snacks</a>
                                                                </span>
                                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog3} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        12 <code>oct</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <Row>
                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Vegetable</a>
                                                                </span>
                                                                <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog2} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        22 <code>jan</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Food</a>
                                                                </span>
                                                                <h5>Best guide to Shopping for organic ingredients.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog1} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        09 <code>sep</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>

                                                <Col md={4} className='my-2'>
                                                    <div className='swiper-slide'>
                                                        <div className="cr-blog">
                                                            <div className="cr-blog-content">
                                                                <span>
                                                                    <code>By Admin</code> | <a href="#">Snacks</a>
                                                                </span>
                                                                <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                                                <a href="#" className='read'>Read More <FaArrowRight /></a>
                                                            </div>
                                                            <div className="cr-blog-image">
                                                                <img src={blog3} />
                                                                <div className="cr-blog-date">
                                                                    <span>
                                                                        12 <code>oct</code>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Home;