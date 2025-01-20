import './TrackOrder.css';

import { FaCheck } from 'react-icons/fa6';
import { Container, Row, Col } from "react-bootstrap";
import { LuShieldCheck } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiGiftLine, RiHome4Line, RiTruckLine } from 'react-icons/ri';

const TrackOrder = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Track Order</h2>
                                    <span>
                                        <a href="#">Home</a> - Track Order
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Track Order section */}
            <section className='cr-track py-100'>
                <Container>
                    <Row>
                        <Container>
                            <div className='cr-track-box'>
                                <Row>
                                    <Col md={4} className='py-2'>
                                        <div className="cr-track-card">
                                            <span className="cr-track-title">order</span>
                                            <span>#9857</span>
                                        </div>
                                    </Col>

                                    <Col md={4} className='py-2'>
                                        <div className="cr-track-card">
                                            <span className="cr-track-title">Grasshoppers</span>
                                            <span>M254HT</span>
                                        </div>
                                    </Col>

                                    <Col md={4} className='py-2'>
                                        <div className="cr-track-card">
                                            <span className="cr-track-title">Expected date</span>
                                            <span>Feb 17, 2025</span>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="cr-steps">
                                    <div className="cr-steps-body">

                                        <div className="cr-step cr-step-completed">
                                            <span className="cr-step-indicator">
                                                <FaCheck className='check' />
                                            </span>
                                            <span className="cr-step-icon">
                                                <LuShieldCheck />
                                            </span>Order<br /> confirmed
                                        </div>

                                        <div className="cr-step cr-step-completed">
                                            <span className="cr-step-indicator">
                                                <FaCheck className='check' />
                                            </span>
                                            <span className="cr-step-icon">
                                                <IoSettingsOutline />
                                            </span>Processing<br /> order
                                        </div>

                                        <div className="cr-step cr-step-active">
                                            <span className="cr-step-icon">
                                                <RiGiftLine />
                                            </span>Quality<br /> check
                                        </div>

                                        <div className="cr-step">
                                            <span className="cr-step-icon">
                                                <RiTruckLine />
                                            </span>Product<br /> dispatched
                                        </div>

                                        <div className="cr-step">
                                            <span className="cr-step-icon">
                                                <RiHome4Line />
                                            </span>Product<br /> delivered
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TrackOrder;