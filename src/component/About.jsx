import './About.css'

import $ from 'jquery'

import { Carousel, Col, Container, Row } from 'react-bootstrap';

import about1 from './img/about1.jpg'
import { useState } from 'react';
import { RiRedPacketLine, RiCustomerService2Line, RiTruckLine, RiMoneyDollarBoxLine, RiFacebookLine } from "react-icons/ri";

const About = () => {

    // Counter
    $('.elementor-counter-number').each(function () {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            step: function (func) {
                $(this).text(parseFloat(func).toFixed(size));
            }
        });
    });

    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return(
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>About Us</h2>
                                    <span>
                                        <a href="#">Home</a> - About Us
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* about */}
            <section className="section-about py-100">
                <Container>
                    <Row>
                        <Col lg={6} className='py-2'>
                            <div className="cr-about d-flex flex-column justify-content-center">
                                <h4 className="heading">About The Carrot</h4>
                                <div className="cr-about-content">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda rerum quod. Tempora magni autem a voluptatibus neque.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit voluptatum eius perferendis amet!.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed blanditiis quod aspernatur! Iusto?
                                    </p>

                                    <div className="elementor-counter">
                                        <Row>
                                            <Col sm={4} xs={12}>
                                                <h4 className="elementor text-center">
                                                    <span className='elementor-counter-number'>1.2</span>
                                                    <span className='elementor-suffix'>k</span>
                                                </h4>
                                                <div className="elementor-counter-title text-center">
                                                    <span>Vendors</span>
                                                </div>
                                            </Col>

                                            <Col sm={4} xs={12}>
                                                <h4 className="elementor text-center">
                                                    <span className='elementor-counter-number'>410</span>
                                                    <span className='elementor-suffix'>k</span>
                                                </h4>
                                                <div className="elementor-counter-title text-center">
                                                    <span>Customers</span>
                                                </div>
                                            </Col>

                                            <Col sm={4} xs={12}>
                                                <h4 className="elementor text-center">
                                                    <span className='elementor-counter-number'>34</span>
                                                    <span className='elementor-suffix'>k</span>
                                                </h4>
                                                <div className="elementor-counter-title text-center">
                                                    <span>Products</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} className='py-2'>
                            <div className="cr-about-image">
                                <img src={about1} alt="about1" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services */}
            <section className='section-services pb-100 position-relative'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="cr-banner-slider">
                                <Carousel activeIndex={index} onSelect={handleSelect} className='swiper-wrapper'>
                                    <Carousel.Item>
                                        <Row>
                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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
                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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
                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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

                                            <Col md={3} className='py-2'>
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
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About;