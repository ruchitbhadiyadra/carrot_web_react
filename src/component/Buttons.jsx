import './Buttons.css';

import { Button, Col, Container, Row } from "react-bootstrap"

const Buttons = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <div className='col-lg-12 col-lg-6'>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Buttons</h2>
                                    <span>
                                        <a href="#">Home</a> - Buttons
                                    </span>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* button section 1 */}
            <section className="section-button pt-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Style 1</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="cr-btn-ds d-flex flex-row justify-content-center flex-wrap">
                                <Button variant="white" className='btn'>Default</Button>
                                <Button variant="primary" className='btn'>Primary</Button>
                                <Button variant="secondary" className='btn'>Secondary</Button>
                                <Button variant="success" className='btn'>Success</Button>
                                <Button variant="info" className='btn'>Info</Button>
                                <Button variant="warning" className='btn'>Warning</Button>
                                <Button variant="danger" className='btn'>Danger</Button>
                                <Button variant="primary" className='btn' disabled>Disabled</Button>
                                <Button variant="primary" className='btn link'>Link</Button>
                                <Button variant="primary jittery" className='btn'>Click Me</Button>
                                <Button variant="primary jelly" className='btn'>Jelly</Button>
                                <Button variant="primary pulse" className='btn'>Pulse</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* button section 2 */}
            <section className="section-button py-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Style 2</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="cr-btn-bw d-flex flex-row justify-content-center flex-wrap">
                                <button className="custom-btn btn-1">Read More</button>
                                <button className="custom-btn btn-2">Read More</button>
                                <button className="custom-btn btn-3"><span>Read More</span></button>
                                <button className="custom-btn btn-4">Read More</button>
                                <button className="custom-btn btn-5"><span>Read More</span></button>
                                <button className="custom-btn btn-6"><span>Read More</span></button>
                                <button className="custom-btn btn-7">Read More</button>
                                <button className="custom-btn btn-8">Read More</button>
                                <button className="custom-btn btn-9">Read More</button>
                                <button className="custom-btn btn-10">Read More</button>
                                <button className="custom-btn btn-11">Read More</button>
                                <button className="custom-btn btn-12"><span>Click!</span><span>Read More</span></button>
                                <button className="custom-btn btn-13">Read More</button>
                                <button className="custom-btn btn-14">Read More</button>
                                <button className="custom-btn btn-15">Read More</button>
                                <button className="custom-btn btn-16">Read More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Buttons