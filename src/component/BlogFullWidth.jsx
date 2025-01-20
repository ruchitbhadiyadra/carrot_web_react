import './BlogLeftSidebar.css';

import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";

import blog1 from './img/blog1.jpg'
import blog_2 from './img/blog-2.jpg'
import blog_3 from './img/blog-3.jpg'

const BlogFullWidth = () => {
    return(
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Blog Classic</h2>
                                    <span>
                                        <a href="#">Home</a> - Blog Classic
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* blog classic */}
            <div className="section-blog-classic py-100">
                <Container>
                    <Row className='mb-minus-24'>

                        <Col lg={6} xs={12} className='mb-24'>
                            <div className="cr-blog-classic">
                                <div className="cr-blog-classic-content">
                                    <div className="cr-comment">
                                        <span>By Admin <code> / 07 commen</code></span>
                                    </div>
                                    <h4>Best guide to Shopping for Organic ingredients.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum magnam tenetur inventore dicta voluptatum perferendis voluptate!
                                    </p>
                                    <a href="#">read more <FaArrowRight className='right' /> </a>
                                </div>
                                
                                <div className="cr-blog-image position-relative overflow-hidden">
                                    <img src={blog1} alt="blog1" />
                                </div>
                            </div>

                            <div className="cr-blog-classic">
                                <div className="cr-blog-classic-content">
                                    <div className="cr-comment">
                                        <span>By Admin <code> / 07 commen</code></span>
                                    </div>
                                    <h4>Best guide to Shopping for Organic ingredients.</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum magnam tenetur inventore dicta voluptatum perferendis voluptate!
                                    </p>
                                    <a href="#">read more <FaArrowRight className='right' /> </a>
                                </div>
                                
                                <div className="cr-blog-image position-relative overflow-hidden">
                                    <img src={blog_2} alt="blog-2" />
                                </div>
                            </div>

                            <div className="cr-blog-classic">
                                <div className="cr-blog-classic-content">
                                    <div className="cr-comment">
                                        <span>By Admin <code> / 07 commen</code></span>
                                    </div>
                                    <h4>Best guide to Shopping for Organic ingredients.</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum magnam tenetur inventore dicta voluptatum perferendis voluptate!
                                    </p>
                                    <a href="#">read more <FaArrowRight className='right' /> </a>
                                </div>
                                
                                <div className="cr-blog-image position-relative overflow-hidden">
                                    <img src={blog_3} alt="blog-3" />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} xs={12} className='mb-24'>
                            <div className="cr-blog-classic">
                                <div className="cr-blog-classic-content">
                                    <div className="cr-comment">
                                        <span>By Admin <code> / 07 commen</code></span>
                                    </div>
                                    <h4>Best guide to Shopping for Organic ingredients.</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum magnam tenetur inventore dicta voluptatum perferendis voluptate!
                                    </p>
                                    <a href="#">read more <FaArrowRight className='right' /> </a>
                                </div>
                                
                                <div className="cr-blog-image position-relative overflow-hidden">
                                    <img src={blog_2} alt="blog-2" />
                                </div>
                            </div>

                            <div className="cr-blog-classic">
                                <div className="cr-blog-classic-content">
                                    <div className="cr-comment">
                                        <span>By Admin <code> / 07 commen</code></span>
                                    </div>
                                    <h4>Best guide to Shopping for Organic ingredients.</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum magnam tenetur inventore dicta voluptatum perferendis voluptate!
                                    </p>
                                    <a href="#">read more <FaArrowRight className='right' /> </a>
                                </div>
                                
                                <div className="cr-blog-image position-relative overflow-hidden">
                                    <img src={blog_3} alt="blog-3" />
                                </div>
                            </div>

                            <div className="cr-blog-classic">
                                <div className="cr-blog-classic-content">
                                    <div className="cr-comment">
                                        <span>By Admin <code> / 07 commen</code></span>
                                    </div>
                                    <h4>Best guide to Shopping for Organic ingredients.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias odit cupiditate harum magnam tenetur inventore dicta voluptatum perferendis voluptate!
                                    </p>
                                    <a href="#">read more <FaArrowRight className='right' /> </a>
                                </div>
                                
                                <div className="cr-blog-image position-relative overflow-hidden">
                                    <img src={blog1} alt="blog1" />
                                </div>
                            </div>
                        </Col>

                        <nav aria-label="..." className="cr-pagination d-flex justify-content-center">
                            <ul className="pagination m-0">
                                <li className="page-item disabled">
                                    <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item active" aria-current="page">
                                    <span className="page-link">1</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default BlogFullWidth;