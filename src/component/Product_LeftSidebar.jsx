import { Button, Carousel, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import './Product.css'

import $ from 'jquery'

import card1 from './img/card1.jpg'
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg'
import card5 from './img/card5.jpg';
import card7 from './img/card7.jpg';
import card8 from './img/card8.jpg'
import card9 from './img/card9.jpg'
import card10 from './img/card10.jpg'
import card11 from './img/card11.jpg'
import card12 from './img/card12.jpg'
import card13 from './img/card13.jpg'
import review1 from './img/review1.jpg'
import review2 from './img/review2.jpg'

import { useState } from 'react';
import { FaRegEye, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoBagOutline } from 'react-icons/io5';

const Product_LeftSidebar = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    // Product kg
    $(".cr-kg ul li").on("click", function () {
        $("ul li").removeClass("active-color");
        $(this).addClass("active-color");
    });

    return(
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Product</h2>
                                    <span>
                                        <a href="#">Home</a> - Product
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Product */}
            <section className='section-product pt-100'>
                <Container>
                    <Row>
                        
                        <Col lg={3} xs={12}>
                            <div className="cr-shop-sideview">

                                <div className="cr-shop-categories">
                                    <h4 className="cr-shop-sub-title">Category</h4>
                                    <div className="cr-checkbox">

                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="drinks" />
                                            <label htmlFor="drinks" className='position-relative'>Juice & Drinks</label>
                                            <span>[20]</span>
                                        </div>

                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="drinks" />
                                            <label htmlFor="drinks" className='position-relative'>Dairy & Milk</label>
                                            <span>[54]</span>
                                        </div>

                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="drinks" />
                                            <label htmlFor="drinks" className='position-relative'>Snack & Spice</label>
                                            <span>[64]</span>
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="cr-shop-price">
                                    <h4 className="cr-shop-sub-title">Price</h4>
                                    <div className="price-range-slider">
                                        <div id="slider-range" className="range-bar"></div>
                                        <p className="range-value">
                                            <label>Price :</label>
                                            <input type="text" id="amount" placeholder="'" readOnly />
                                        </p>
                                        <button type="button" className="cr-button">Filter</button>
                                    </div>
                                </div> */}

                                <div className="cr-shop-color">
                                    <h4 className="cr-shop-sub-title">Colors</h4>
                                    <div className="cr-checkbox">
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="blue" />
                                            <label for="blue">Blue</label>
                                            <span className="blue"></span>
                                        </div>
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="yellow" />
                                            <label for="yellow">Yellow</label>
                                            <span className="yellow"></span>
                                        </div>
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="red" />
                                            <label for="red">Red</label>
                                            <span className="red"></span>
                                        </div>
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="green" />
                                            <label for="green">green</label>
                                            <span className="green"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-shop-weight">
                                    <h4 className="cr-shop-sub-title">Weight</h4>
                                    <div className="cr-checkbox">
                                        <div className="checkbox-group">
                                            <input type="checkbox" id="2kg" />
                                            <label for="2kg">2kg Pack</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input type="checkbox" id="20kg" />
                                            <label for="20kg">20kg Pack</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input type="checkbox" id="30kg" />
                                            <label for="30kg">30kg pack</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-shop-tags">
                                    <h4 className="cr-shop-sub-title">Tages</h4>
                                    <div className="cr-shop-tags-inner">
                                        <ul className="cr-tags">
                                            <li><Button>Vegetables</Button></li>
                                            <li><Button>juice</Button></li>
                                            <li><Button>Food</Button></li>
                                            <li><Button>Dry Fruits</Button></li>
                                            <li><Button>Vegetables</Button></li>
                                            <li><Button>juice</Button></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </Col>

                        <Col lg={9} xs={12}>
                            <Row className='mb-minus-24'>
                                <Col md={6} xs={12} className='mb-24 my-2'>
                                    <div className='vehicle-detail-banner banner-content clearfix'>
                                        <div className="banner-slide">
                                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card1} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card4} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card8} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card10} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card9} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card11} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card12} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <div className='slider-banner'>
                                                        <Container className='container'>
                                                            <Row>
                                                                <Col lg={12} xs={12}>
                                                                    <div className='slider-banner-image slick-slide'>
                                                                        <div className="zoom-image">
                                                                            <img src={card13} />
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Carousel.Item>
                                            </Carousel>

                                            <div className='thumb-image slick-slider'>
                                                <div className='slick-list'>
                                                    <div className='slick-track' style={{opacity: "1", width: "1764px", transform: "translate3d(-485px, 0px, 0px)"}}>
                                                        <Carousel activeIndex={index} onSelect={handleSelect} className=''>
                                                            <Carousel.Item>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card1} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card4} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card8} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card10} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card9} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card11} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card12} />
                                                                    </div>
                                                                </div>
                                                                <div className='thumbnail-image slick-slide slick-cloned' style={{width: "97px"}}>
                                                                    <div className="thumbImg">
                                                                        <img src={card13} />
                                                                    </div>
                                                                </div>
                                                            </Carousel.Item>
                                                        </Carousel>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} xs={12} className='mb-24'>
                                    <div className="cr-size-and-weight-contain">
                                        <h2 className="heading">Seeds Of Change Oraganic Quinoa, Brown</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                                    </div>
                                    <div className="cr-size-and-weight">
                                        <div className="cr-review-star">
                                            <div className="cr-star">
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                                <FaStar className='star' />
                                            </div>
                                            <p>( 75 Review )</p>
                                        </div>
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <label>Brand <span>:</span></label> ESTA BETTERU CO
                                                </li>
                                                <li>
                                                    <label>Flavour <span>:</span></label> Super Saver Pack
                                                </li>
                                                <li>
                                                    <label>Diet Type <span>:</span></label> Vegetarian
                                                </li>
                                                <li>
                                                    <label>Weight <span>:</span></label> 200 Grams
                                                </li>
                                                <li>
                                                    <label>Speciality <span>:</span></label> Gluten Free, Sugar Free
                                                </li>
                                                <li>
                                                    <label>Info <span>:</span></label> Egg Free, Allergen-Free
                                                </li>
                                                <li>
                                                    <label>Items <span>:</span></label> 1
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="cr-product-price">
                                            <span className="new-price">$120.25</span>
                                            <span className="old-price">$123.25</span>
                                        </div>
                                        <div className="cr-size-weight d-flex align-items-center">
                                            <h5 className='mb-0'>
                                                <span>Size</span>/ <span>Weight</span> :
                                            </h5>
                                            <div className="cr-kg">
                                                <ul className='p-0 m-0 d-flex flex-wrap'>
                                                    <li className='active-color'>50kg</li>
                                                    <li>80kg</li>
                                                    <li>120kg</li>
                                                    <li>200kg</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="cr-add-card d-flex">
                                            <div className="cr-qty-main d-flex position-relative">
                                                <input type='text' placeholder='.' value={1} minLength={1} maxLength={20} className='quantity text-center' />
                                                <button type='button' id='add' className='plus p-0'>+</button>
                                                <button type='button' id='sub' className='minus p-0'>-</button>
                                            </div>
                                            <div className="cr-add-button">
                                                <button type="button" className="cr-button cr-shopping-bag" fdprocessedid="v32avt">Add to cart</button>
                                            </div>
                                            <div className="cr-card-icon d-flex">
                                                <Button className="wishlist m-0 p-0">
                                                    <FaRegHeart className='icon' />
                                                </Button>
                                                <Button className="model-oraganic-product m-0 p-0" data-bs-toggle="modal">
                                                    <FaRegEye className='icon' />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            
                            <div className="cr-paking-delivery">

                                <Tab.Container defaultActiveKey="Description">
                                    <Nav variant="tabs" className="mb-3">
                                        <Nav.Item>
                                            <Nav.Link eventKey="Description">Description</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Information">Information</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Review">Review</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="Description">
                                            <div className="tab-pane fade show active" id="description" role="tabpanel"
                                            aria-labelledby="description-tab">
                                                <div className="cr-tab-content">
                                                    <div className="cr-description">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                            sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                                                            dignissimos consectetur quae in perferendis
                                                            doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                                            perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                                            ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                                            laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                                    </div>
                                                    <h4 className="heading">Packaging & Delivery</h4>
                                                    <div className="cr-description">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                            perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                                            ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                                            laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Information">
                                            <div className="tab-pane fade show active" id="additional" role="tabpanel" aria-labelledby="additional-tab">
                                                <div className="cr-tab-content">
                                                    <div className="cr-description">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                            sapiente
                                                            doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel
                                                            perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                                                            ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                                                            laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                                                    </div>
                                                    <div className="list">
                                                        <ul>
                                                            <li><label>Brand <span>:</span></label>ESTA BETTERU CO</li>
                                                            <li><label>Flavour <span>:</span></label>Super Saver Pack</li>
                                                            <li><label>Diet Type <span>:</span></label>Vegetarian</li>
                                                            <li><label>Weight <span>:</span></label>200 Grams</li>
                                                            <li><label>Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                                                            <li><label>Info <span>:</span></label>Egg Free, Allergen-Free</li>
                                                            <li><label>Items <span>:</span></label>1</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Review">
                                            <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                                                <div className="cr-tab-content-from">
                                                    <div className="post">
                                                        <div className="content">
                                                            <img src={review1} alt="review1" />
                                                            <div className="details">
                                                                <span className="date">Jan 08, 2024</span>
                                                                <span className="name">Oreo Noman</span>
                                                            </div>
                                                            <div className="cr-t-review-rating">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                            sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                                                            adipisci vel
                                                            perferendis dolor! quae vero in perferendis provident quis.</p>
                                                        <div className="content mt-30">
                                                            <img src={review2} alt="review2" />
                                                            <div className="details">
                                                                <span className="date">Mar 22, 2024</span>
                                                                <span className="name">Lina Wilson</span>
                                                            </div>
                                                            <div className="cr-t-review-rating">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                                                            sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum
                                                            adipisci vel
                                                            perferendis dolor! quae vero in perferendis provident quis.</p>
                                                    </div>

                                                    <h4 className="heading">Add a Review</h4>
                                                    <form action="javascript:void(0)">
                                                        <div className="cr-ratting-star d-flex">
                                                            <span>Your rating :</span>
                                                            <div className="cr-t-review-rating">
                                                                <FaStar className='star' />
                                                                <FaStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <FaRegStar className='star' />
                                                                <FaRegStar className='star' />
                                                            </div>
                                                        </div>
                                                        <div className="cr-ratting-input">
                                                            <input name="your-name" placeholder="Name" type="text" />
                                                        </div>
                                                        <div className="cr-ratting-input">
                                                            <input name="your-email" placeholder="Email*" type="email" required="" />
                                                        </div>
                                                        <div className="cr-ratting-input form-submit">
                                                            <textarea name="your-commemt" placeholder="Enter Your Comment"></textarea>
                                                            <button className="cr-button" type="submit" value="Submit">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Popular products */}
            <section className="section-popular-products py-100 aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xxl={2} xl={4} xs={12} className="cr-product-box mb-24 my-2">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                        <Col xxl={2} xl={4} xs={12} className="cr-product-box mb-24 my-2">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                        <Col xxl={2} xl={4} xs={12} className="cr-product-box mb-24 my-2">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xxl={2} xl={4} xs={12} className="cr-product-box mb-24 my-2">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                        <Col xxl={2} xl={4} xs={12} className="cr-product-box mb-24 my-2">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
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
                        
                        <Col xxl={2} xl={4} xs={12} className="cr-product-box mb-24 my-2">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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
                                        <span className="old-price">$22</span>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Product_LeftSidebar;