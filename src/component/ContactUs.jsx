import './ContactUs.css';

import { IoCallOutline } from 'react-icons/io5';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CiMail } from 'react-icons/ci';
import { TiGlobeOutline } from 'react-icons/ti';
import { FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Contact Us</h2>
                                    <span>
                                        <a href="#">Home</a> - Contact Us
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Contact */}
            <section className='section-contact py-100'>
                <Container>
                    <Row>
                        <div className="col-ld-12">
                            <div className="mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                                <div className="cr-banner">
                                    <h2>Get in Touch</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs
                                        do ye
                                        admire. His secure called esteem praise.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Row className='mb-minus-24'>
                        <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up">
                            <div className="cr-info-box text-center">
                                <div className="cr-icon">
                                    <IoCallOutline className='call' />
                                </div>
                                <div className="cr-info-content">
                                    <h4 className="heading">Contact</h4>
                                    <p><a href="javascript:void(0)"><IoCallOutline /> &nbsp; (+91)-9876XXXXX</a></p>
                                    <p><a href="javascript:void(0)"><IoCallOutline /> &nbsp; (+91)-987654XXXX</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up">
                            <div className="cr-info-box text-center">
                                <div className="cr-icon">
                                    <CiMail className='call' />
                                </div>
                                <div className="cr-info-content">
                                    <h4 className="heading">Mail & Website</h4>
                                    <p><a href="javascript:void(0)"><CiMail /> &nbsp; mail.example@gmail.com</a></p>
                                    <p><a href="javascript:void(0)"><TiGlobeOutline /> &nbsp; www.yourdomain.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up">
                            <div className="cr-info-box text-center">
                                <div className="cr-icon">
                                    <FiMapPin className='call' />
                                </div>
                                <div className="cr-info-content">
                                    <h4 className="heading">Address</h4>
                                    <p><a href="javascript:void(0)"><FiMapPin /> &nbsp; 140 Ruami Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Row>

                    <Row className='pt-100 mb-minus-24'>

                        <div className='col-md-6 col-12 mb-24'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
                        </div>

                        <div className='col-md-6 col-12 mb-24'>
                            <div className="cr-content-form">
                                <div className="form-group">
                                    <input type='text' placeholder='Full Name' className='cr-form-control' />
                                </div>

                                <div className="form-group">
                                    <input type='email' placeholder='Email' className='cr-form-control' />
                                </div>

                                <div className="form-group">
                                    <input type="text" placeholder="Phone" className="cr-form-control" />
                                </div>

                                <div className="form-group">
                                    <textarea className="cr-form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
                                </div>
                                
                                <Button type="button" className="cr-button">Submit</Button>
                            </div>
                        </div>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactUs;