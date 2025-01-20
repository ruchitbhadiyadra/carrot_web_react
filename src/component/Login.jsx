import './Login.css';

import { Button, Col, Container, Row } from "react-bootstrap";

import logo from './img/logo.png';
import { Link } from 'react-router';

const Login = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Login</h2>
                                    <span>
                                        <a href="#">Home</a> - Login
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* login */}
            <div className="section-login py-100">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="cr-login">
                                <div className="form-logo d-flex align-items-center justify-content-center">
                                    <img src={logo} alt="logo" />
                                </div>
                                <form className="cr-content-form">
                                    <div className="form-group">
                                        <label>Email Address*</label>
                                        <input type="email" placeholder="Enter Your Email" className="cr-form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password*</label>
                                        <input type="password" placeholder="Enter Your password" className="cr-form-control" />
                                    </div>

                                    <div className="remember d-flex justify-content-between align-items-center">
                                        <span className="form-group custom m-0 d-flex align-items-center">
                                            <input type="checkbox" id="html" />
                                            <label htmlFor="html">Remember Me</label>
                                        </span>
                                        <Link to="/forgot" className="link">Forgot Password?</Link>
                                    </div><br />

                                    <div className="login-buttons text-center d-flex justify-content-between align-items-center flex-wrap">
                                        <Button type="button" className="cr-button">Login</Button>
                                        <Link to="/register" className='link'>
                                            Signup?
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login;