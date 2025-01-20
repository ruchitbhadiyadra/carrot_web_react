import './Forgot.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

import logo from './img/logo.png';
import { Link } from 'react-router';

const Forgot = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Forgot Password</h2>
                                    <span>
                                        <a href="#">Home</a> - Forgot Password
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* forgot */}
            <div className="section-forgot py-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="cr-forgot">
                                <div className="form-logo d-flex align-items-center justify-content-center">
                                    <img src={logo} alt="logo" />
                                </div>
                                <form className="cr-content-form">
                                    <Row>
                                        <Col sm={12} xs={12}>
                                            <div className="form-group">
                                                <label>Email Address*</label>
                                                <input type="email" placeholder="Enter Your Email" className="cr-form-control" />
                                            </div>
                                        </Col>

                                        <div className="cr-forgot-buttons text-center d-flex justify-content-between align-items-center flex-wrap">
                                            <Button type="button" className="cr-button">submit</Button>
                                            <Link to="/register" className="link">
                                                Signup?
                                            </Link>
                                        </div>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Forgot;