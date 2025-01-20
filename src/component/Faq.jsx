import './Faq.css';

import { Col, Container, Row, Accordion } from "react-bootstrap";

import about1 from './img/about1.jpg'

const Faq = () => {
    return(
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Faq</h2>
                                    <span>
                                        <a href="#">Home</a> - Faq
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* faq */}
            <section className="section-faq py-100">
                <Container>
                    <Row>
                        <Col lg={6} className='py-2'>
                            <div className="cr-faq-img">
                                <img src={about1} alt="about1" />
                            </div>
                        </Col>

                        <Col lg={6} className='py-2'>
                            <div className="cr-faq">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What Facilities Does Your Hotel Have?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How Do I Book A Room For My Vacation?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How We are best among others?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Is There Any Fitness Center In Your Hotel?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What Type Of Room Service Do You Offer?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What Facilities Does Your Hotel Have?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>How Do I Book A Room For My Vacation?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Is There Any Fitness Center In Your Hotel?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>There Any Fitness Is Center In Your Hotel?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                                                sequi voluptas rem doloremque architecto. Libero, vero
                                                natus.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Faq;