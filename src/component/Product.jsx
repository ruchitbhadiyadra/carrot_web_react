// CSS
import './Product.css'

// img
import card1 from './img/card1.jpg'
import card2 from './img/card2.jpg'
import card3 from './img/card3.jpg'
import card4 from './img/card4.jpg'
import card5 from './img/card5.jpg'
import card6 from './img/card6.jpg'

// icon
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Container, Row, Col } from 'react-bootstrap'

const Product = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Product</h2>
                                    <span>
                                        <a href="#">Home</a> - Product
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* style 1 */}
            <section className='w-100 d-block product'>
                <Container className="px-3 mx-auto">
                    <Row>
                        <Col lg={12}>
                            <div className='mb-30'>
                                <div className='title text-center'>
                                    <h2 className='fw-bold'>Style 1</h2>
                                </div>
                                <div className='sub-title'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card1} alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details text-center overflow-hidden">
                                    <div className="cr-brand">
                                        <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                        <div className="cr-star d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <p className='rate'>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut pack 200gm</a>
                                    <p className="cr-price">
                                        <span className="new-price">$145</span>
                                        <span className="old-price">$150</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                        <img src={card2} alt="card2" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details text-center overflow-hidden">
                                    <div className="cr-brand">
                                        <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                        <div className="cr-star d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaRegStar className='star' />
                                            <p className='rate'>(4.5)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Fresh organic apple 1kg simla marming</a>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                        <img src={card3} alt="card3" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details text-center overflow-hidden">
                                    <div className="cr-brand">
                                        <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                        <div className="cr-star d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaRegStar className='star' />
                                            <FaRegStar className='star' />
                                            <p className='rate'>(3.2)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Organic fresh venila farm watermelon 5kg</a>
                                    <p className="cr-price">
                                        <span className="new-price">$50.30</span>
                                        <span className="old-price">$72.60</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card bg-white d-flex flex-column">
                                <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                        <img src={card4} alt="card4" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details text-center overflow-hidden">
                                    <div className="cr-brand">
                                        <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                        <div className="cr-star d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <p className='rate'>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>

            {/* style 2 */}
            <section className='w-100 d-block product'>
                <Container className="px-3 mx-auto">
                    <Row>
                        <Col lg={12}>
                            <div className='mb-30'>
                                <div className='title text-center'>
                                    <h2 className='fw-bold'>Style 2</h2>
                                </div>
                                <div className='sub-title'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={4} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card5} alt="card5" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic fresh lemon</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card2} alt="card2" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic fresh apple juice</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card3} alt="card3" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic fresh venila farm watermelon 5kg</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>

            {/* style 3 */}
            <section className='w-100 d-block product'>
                <Container className="px-3 mx-auto">
                    <Row>
                        <Col lg={12}>
                            <div className='mb-30'>
                                <div className='title text-center'>
                                    <h2 className='fw-bold'>Style 3</h2>
                                </div>
                                <div className='sub-title'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={3} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card5} alt="card5" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic fresh lemon</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor impicit adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card2} alt="card2" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic fresh apple juice</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor impicit adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card3} alt="card3" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic watermelon 5kg</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor impicit adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={6} className="mb-24">
                            <div className='product-card2 d-flex flex-column'>
                                <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                    <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                        <img src={card6} alt="card6" className='img d-block m-auto' />
                                        <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                            <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                                <FaRegHeart className='heart' />
                                            </a>
                                            <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                                <MdOutlineRemoveRedEye className='eye' />
                                            </a>
                                        </div>
                                    </div>
                                    <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                    <a href="#" className='d-flex justify-content-center'>Organic fresh venila farm</a>
                                    <p className='cr-product2-name'>Lorem ipsum dolor impicit adipisicing elit.</p>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <p className="cr-price">
                                        <span className="new-price">$120.25</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>

            {/* style 4 */}
            <section className='w-100 d-block pb-100 product'>
                <Container className="px-3 mx-auto">
                    <Row>
                        <Col lg={12}>
                            <div className='mb-30'>
                                <div className='title text-center'>
                                    <h2 className='fw-bold'>Style 4</h2>
                                </div>
                                <div className='sub-title'>
                                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card4 bg-white d-flex flex-column">
                                <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card1} alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details4 text-center overflow-hidden">
                                    <div className="cr-brand4">
                                        <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                        <div className="cr-star4 d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <p className='rate'>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Best snakes with hazel nut pack 200gm</a>
                                    <p className="cr-price">
                                        <span className="new-price">$145</span>
                                        <span className="old-price">$150</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card4 bg-white d-flex flex-column">
                                <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card2} alt="card2" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details4 text-center overflow-hidden">
                                    <div className="cr-brand4">
                                        <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                        <div className="cr-star4 d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <p className='rate'>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Fresh organic apple 1kg simla marming</a>
                                    <p className="cr-price">
                                        <span className="new-price">$145</span>
                                        <span className="old-price">$150</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card4 bg-white d-flex flex-column">
                                <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card3} alt="card3" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details4 text-center overflow-hidden">
                                    <div className="cr-brand4">
                                        <a href="#" className='d-flex justify-content-center'>Fruits</a>
                                        <div className="cr-star4 d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <p className='rate'>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Organic fresh venila farm watermelon 5kg</a>
                                    <p className="cr-price">
                                        <span className="new-price">$145</span>
                                        <span className="old-price">$150</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="mb-24">
                            <div className="product-card4 bg-white d-flex flex-column">
                                <div className="product-card-img4 d-flex justify-content-center position-relative align-items-center">
                                    <div className="image-inner4 d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card4} alt="card4" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view4 position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                    <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                        <IoBagOutline className='bag' />
                                    </a>
                                </div>
                                <div className="cr-product-details4 text-center overflow-hidden">
                                    <div className="cr-brand4">
                                        <a href="#" className='d-flex justify-content-center'>Snacks</a>
                                        <div className="cr-star4 d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <p className='rate'>(5.0)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Sweet crunchy nut mix 250gm pack</a>
                                    <p className="cr-price">
                                        <span className="new-price">$145</span>
                                        <span className="old-price">$150</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </section>
        </>
    );
}

export default Product;