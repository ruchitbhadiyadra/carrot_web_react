import './ElementsTypography.css';

import { Col, Container, Row } from "react-bootstrap";

const ElementsTypography = () => {
    return(
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Typography</h2>
                                    <span>
                                        <a href="#">Home</a> - Typography
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Typography style1 */}
            <div className="section-typography pt-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Style 1</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-minus-24 typography">
                        <Col lg={3} md={6} sm={12} className="mb-24">
                            <h1 className="cr-fw-normal cr-fc">HEADING H1</h1>
                            <h2 className="cr-fw-normal cr-fc">HEADING H2</h2>
                            <h3 className="cr-fw-normal cr-fc">HEADING H3</h3>
                            <h4 className="cr-fw-normal cr-fc">HEADING H4</h4>
                            <h5 className="cr-fw-normal cr-fc">HEADING H5</h5>
                            <h6 className="cr-fw-normal cr-fc">HEADING H6</h6>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="mb-24">
                            <h1 className="cr-fw-bold cr-fc">HEADING H1</h1>
                            <h2 className="cr-fw-bold cr-fc">HEADING H2</h2>
                            <h3 className="cr-fw-bold cr-fc">HEADING H3</h3>
                            <h4 className="cr-fw-bold cr-fc">HEADING H4</h4>
                            <h5 className="cr-fw-bold cr-fc">HEADING H5</h5>
                            <h6 className="cr-fw-bold cr-fc">HEADING H6</h6>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="mb-24">
                            <h1 className="cr-lb cr-fc">HEADING H1</h1>
                            <h2 className="cr-lb cr-fc">HEADING H2</h2>
                            <h3 className="cr-lb cr-fc">HEADING H3</h3>
                            <h4 className="cr-lb cr-fc">HEADING H4</h4>
                            <h5 className="cr-lb cr-fc">HEADING H5</h5>
                            <h6 className="cr-lb cr-fc">HEADING H6</h6>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="mb-24">
                            <h1 className="cr-rb cr-fc">HEADING H1</h1>
                            <h2 className="cr-rb cr-fc">HEADING H2</h2>
                            <h3 className="cr-rb cr-fc">HEADING H3</h3>
                            <h4 className="cr-rb cr-fc">HEADING H4</h4>
                            <h5 className="cr-rb cr-fc">HEADING H5</h5>
                            <h6 className="cr-rb cr-fc">HEADING H6</h6>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Typography style2 */}
            <div className="section-heading py-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
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

                    <Row className="typography">
                        <Col lg={6} md={12} sm={12} xs={12} className="mb-24">
                            <h1 className="cr-fw-normal cr-fc">HEADING H1</h1>
                            <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit
                                amet odio vulputate eleifend in in tortor. ellus massa, tristique sit amet condim vel,
                                facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor.
                                Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim ent
                                id enism sita.sis quis sapi</p>
                        </Col>
                        <Col lg={6} md={12} sm={12} xs={12} className="mb-24">
                            <h1 className="cr-fw-bold cr-fc">HEADING H1</h1>
                            <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit
                                amet odio vulputate eleifend in in tortor. ellus massa, tristique sit amet condim vel,
                                facilisuisacilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor.
                                Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim ent
                                id enism sita.sis quis sapi</p>
                        </Col>
                    </Row>
                    
                    <Row className="typography mb-minus-24">
                        <Col lg={2} md={4} sm={6} xs={6} className="mb-24">
                            <ul className="cr-disc">
                                <li>Friday</li>
                                <li>Monday</li>
                                <li>Saturday</li>
                                <li>Wednesday</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6} className="mb-24">
                            <ul className="cr-decimal">
                                <li>Friday</li>
                                <li>Monday</li>
                                <li>Saturday</li>
                                <li>Wednesday</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6} className="mb-24">
                            <ul className="cr-alpha">
                                <li>Friday</li>
                                <li>Monday</li>
                                <li>Saturday</li>
                                <li>Wednesday</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6} className="mb-24">
                            <ul className="cr-roman">
                                <li>Friday</li>
                                <li>Monday</li>
                                <li>Saturday</li>
                                <li>Wednesday</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6} className="mb-24">
                            <ul className="cr-greek">
                                <li>Friday</li>
                                <li>Monday</li>
                                <li>Saturday</li>
                                <li>Wednesday</li>
                            </ul>
                        </Col>
                        <Col lg={2} md={4} sm={6} xs={6} className="mb-24">
                            <ul className="cr-hebrew">
                                <li>Friday</li>
                                <li>Monday</li>
                                <li>Saturday</li>
                                <li>Wednesday</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ElementsTypography;