import './BlogDetailLeftSidebar.css';

import { FaSearch } from 'react-icons/fa';
import { Container, Row, Col, Button } from "react-bootstrap";

import blog1 from './img/blog1.jpg'
import blog_2 from './img/blog-2.jpg'
import blog_3 from './img/blog-3.jpg'
import insta1 from './img/insta1.jpg'
import insta2 from './img/insta2.jpg'
import insta3 from './img/insta3.jpg'
import insta4 from './img/insta4.jpg'
import insta5 from './img/insta5.jpg'
import insta6 from './img/insta6.jpg'
import { FaCircleArrowRight } from 'react-icons/fa6';
import { GrChat } from 'react-icons/gr';
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterXLine } from 'react-icons/ri';

const BlogDetailRightSidebar = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Blog Details</h2>
                                    <span>
                                        <a href="#">Home</a> - Blog Details
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
                    <Row>
                        
                        <Col lg={9} xs={12}>
                            <div className="cr-blog-details">
                                <div className="cr-blog-details-image">
                                    <img src={blog1} alt="blog1" />
                                </div>

                                <div className="cr-blog-details-content">
                                    <div className="cr-admin-date">
                                        <span><code>By Admin</code> / 07 Comment / Date - 09 ,09 ,2024</span>
                                    </div>
                                    <div className="cr-banner">
                                        <h2>Health Benefits of a Row food</h2>
                                    </div>
                                    <p className="mb-15">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus, soluta officia iure enim itaque. Iste qui exercitationem et odit beatae debitis ratione molestiae quis atque.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus dolor odio nobis eum voluptatem laudantium magni veritatis sint! Aspernatur est quisquam modi laudantium. Assumenda neque vitae corrupti asperiores, quos vel aliquid hic nisi nostrum repellendus dolorem placeat vero odit.
                                    </p>
                                </div>

                                <Row className="mt-30">
                                    <Col xs={6}>
                                        <div className="cr-blog-inner-cols">
                                            <div className="blog-img position-relation">
                                                <img src={blog_2} alt="blog-2" />
                                            </div>
                                            <div className="cr-blog-inner-content">
                                                <FaCircleArrowRight className='rightarrow' /><p>Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="cr-blog-inner-cols">
                                            <div className="blog-img position-relation">
                                                <img src={blog_3} alt="blog-3" />
                                            </div>
                                            <div className="cr-blog-inner-content">
                                                <FaCircleArrowRight className='rightarrow' /><p>Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="cr-blog-details-message">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum architecto odit soluta quas odio distinctio quae numquam? Quaerat nulla blanditiis possimus quae. Iusto doloribus, est aliquam delectus pariatur voluptatem cum iste exercitationem rem.
                                    </p>
                                    <h5 className="title"> John martin</h5>
                                    <GrChat className='chat' />
                                </div>

                                <div className="cr-blog-details-paragrap mt-30">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo fuga molestiae architecto ipsa excepturi laudantium molestias, assumenda vel fugiat hic exercitationem. Necessitatibus itaque et id! Ratione accusantium voluptatum optio rerum facilis expedita.
                                    </p>
                                </div>

                                <div className="cr-blog-details-tags">
                                    <div className="cr-details-tags position-relative d-flex flex-wrap justify-content-between">
                                        <ul className="cr-tags blog">
                                            <li><a href="javascript:void(0)">Cabbage</a></li>
                                            <li><a href="javascript:void(0)">Appetizer</a></li>
                                            <li><a href="javascript:void(0)">Meat Food</a></li>
                                        </ul>
                                        <div className="cr-logo d-flex align-items-center flex-row">
                                            <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'><RiFacebookLine /> </a>
                                            <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'><RiTwitterXLine /> </a>
                                            <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'><RiInstagramLine /> </a>
                                            <a href="javascript:void(0)" className='d-flex align-items-center justify-content-center'><RiLinkedinLine /> </a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <nav aria-label="..." className="cr-pagination d-flex justify-content-center">
                                <ul className="pagination">
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
                        </Col>

                        <Col lg={3} xs={12}>
                            <div className="cr-blog-sideview">
                                <div className="cr-serch-box">
                                    <form className="cr-search position-relative">
                                        <input className='search-input' type="text" placeholder='Search here...' />
                                        <Button className='search-btn d-flex align-items-center justify-content-center position-absolute end-0 top-0 bottom-0 p-0'>
                                            <FaSearch className='search' />
                                        </Button>
                                    </form>
                                </div>

                                <div className="cr-blog-categories">
                                    <div className="blog-heading">
                                        <h4>Category</h4>
                                    </div>
                                    <div className="cr-blog-categories-content">
                                        <ul>
                                            <li className='position-relative d-flex align-items-center'>Milks & Dairies <span className='position-absolute'>( 45 )</span></li>
                                            <li className='position-relative d-flex align-items-center'>Sea Food <span className='position-absolute'>( 65 )</span></li>
                                            <li className='position-relative d-flex align-items-center'>Fresh Fruit <span className='position-absolute'>( 23 )</span></li>
                                            <li className='position-relative d-flex align-items-center'>Pet Food <span className='position-absolute'>( 76 )</span></li>
                                            <li className='position-relative d-flex align-items-center'>Meat Food <span className='position-absolute'>( 34 )</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="cr-blog-recent">
                                    <div className="blog-heading">
                                        <h4>Recent Post</h4>
                                    </div>
                                    <div className="cr-blog-recent-post">
                                        <div className="cr-blog-recent-image position-relative">
                                            <img src={blog1} alt="blog1" />
                                        </div>
                                        <div className="cr-blog-recent-content text-center">
                                            <span>Sep 09, 2024</span>
                                            <h4>10 Tasty Organic Fruit choose</h4>
                                            <p>Lorem ipsum dolor consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-blog-gallery">
                                    <div className="blog-heading">
                                        <h4>Latest Gallery</h4>
                                    </div>
                                    <div className="cr-blog-instagram-image">
                                        <div className="cr-blog-instagram-image-inner d-grid">
                                            <a href="#">
                                                <img src={insta1} alt="insta1" />
                                            </a>
                                            <a href="#">
                                                <img src={insta2} alt="insta2" />
                                            </a>
                                            <a href="#">
                                                <img src={insta3} alt="insta3" />
                                            </a>
                                            <a href="#">
                                                <img src={insta4} alt="insta4" />
                                            </a>
                                            <a href="#">
                                                <img src={insta5} alt="insta5" />
                                            </a>
                                            <a href="#">
                                                <img src={insta6} alt="insta6" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-blog-tags">
                                    <div className="blog-heading">
                                        <h4>Popular Tags</h4>
                                    </div>
                                    <div className="cr-blog-tags-inner">
                                        <ul className="cr-tags">
                                            <li><a href="javascript:void(0)">Vegetables</a></li>
                                            <li><a href="javascript:void(0)">juice</a></li>
                                            <li><a href="javascript:void(0)">Meat Food</a></li>
                                            <li><a href="javascript:void(0)">Cabbage</a></li>
                                            <li><a href="javascript:void(0)">Organic food</a></li>
                                            <li><a href="javascript:void(0)">juice</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BlogDetailRightSidebar;