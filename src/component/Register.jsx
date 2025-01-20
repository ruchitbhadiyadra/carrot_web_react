import './Register.css';

import { Button, Col, Container, Row } from "react-bootstrap";

import logo from './img/logo.png';
import { Link } from 'react-router';

const Register = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Register</h2>
                                    <span>
                                        <a href="#">Home</a> - Register
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Register */}
            <div className="section-register py-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="cr-register">
                                <div className="form-logo d-flex align-items-center justify-content-center">
                                    <img src={logo} alt="logo" />
                                </div>
                                <form className="cr-content-form">
                                    <Row>
                                        <Col sm={6} xs={12}>
                                            <div className="form-group">
                                                <label>First Name*</label>
                                                <input type="text" placeholder="Enter Your Firstname" className="cr-form-control" />
                                            </div>
                                        </Col>

                                        <Col sm={6} xs={12}>
                                            <div className="form-group">
                                                <label>Last Name*</label>
                                                <input type="text" placeholder="Enter Your Lastname" className="cr-form-control" />
                                            </div>
                                        </Col>

                                        <Col sm={6} xs={12}>
                                            <div className="form-group">
                                                <label>Email*</label>
                                                <input type="email" placeholder="Enter Your Email" className="cr-form-control" />
                                            </div>
                                        </Col>

                                        <Col sm={6} xs={12}>
                                            <div className="form-group">
                                                <label>Phone Number*</label>
                                                <input type="number" placeholder="Enter Your Phone Number" className="cr-form-control" />
                                            </div>
                                        </Col>

                                        <Col xs={12}>
                                            <div className="form-group">
                                                <label>Address*</label>
                                                <input type="text" placeholder="Enter Your Address" className="cr-form-control" />
                                            </div>
                                        </Col>

                                        <Col lg={6} xs={12}>
                                            <div className="form-group">
                                                <label>City*</label>
                                                <select className='cr-form-control'>
                                                    <option selected>City</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </Col>

                                        <Col lg={6} xs={12}>
                                            <div className="form-group">
                                                <label>Post Code</label>
                                                <input type="number" placeholder="Post Code" className="cr-form-control" fdprocessedid="90486" />
                                            </div>
                                        </Col>

                                        <Col lg={6} xs={12}>
                                            <div className="form-group">
                                                <label>Country*</label>
                                                <select className='cr-form-control'>
                                                    <option selected>Country</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </Col>

                                        <Col lg={6} xs={12}>
                                            <div className="form-group">
                                                <label>Region State*</label>
                                                <select className='cr-form-control'>
                                                    <option selected>Region/State</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </Col>

                                        <div className="cr-register-buttons text-center d-flex justify-content-between align-items-center flex-wrap">
                                            <Button type="button" className="cr-button">Signup</Button>
                                            <Link to="/login" className="link">
                                                Have an account?
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

export default Register;