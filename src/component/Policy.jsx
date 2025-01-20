import './Policy.css';

import { Col, Container, Row } from "react-bootstrap";

const Policy = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Privacy Policy</h2>
                                    <span>
                                        <a href="#">Home</a> - Privacy Policy
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Policy */}
            <div className="cr-policy py-100">
                <Container>
                    
                    <Row>
                        <Col lg={12}>
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Privacy Policy</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Check our Privacy Policy and Conditions</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={6} className='py-2'>
                            <div className="cr-common-wrapper">
                                <Col sm={12} className='cr-cgi-block'>
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">Welcome to Carrot Store.</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>
                                        </p>
                                    </div>
                                </Col>

                                <Col sm={12} className='cr-cgi-block'>
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">Carrot Websites</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>
                                        </p>
                                    </div>
                                </Col>

                                <Col sm={12} className='cr-cgi-block'>
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">How browsing and vendor works?</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>
                                        </p>
                                    </div>
                                </Col>

                                <Col sm={12} className='cr-cgi-block'>
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">Becoming an vendor</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </Col>

                        <Col lg={6} className='py-2'>
                            <div className="cr-common-wrapper">
                                <Col sm={12} className="cr-cgi-block">
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">How browsing and vendor works?</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12} className="cr-cgi-block">
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">Becoming an vendor</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12} className="cr-cgi-block">
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">How browsing and vendor works?</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <b>Lorem Ipsum is simply dutmmy text.</b>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12} className="cr-cgi-block">
                                    <div className="cr-cgi-block-inner">
                                        <h5 className="cr-cgi-block-title">Becoming an vendor</h5>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <b>Lorem Ipsum is simply dutmmy text</b> ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Policy;