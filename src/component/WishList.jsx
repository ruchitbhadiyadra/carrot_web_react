import { Container, Row, Col } from "react-bootstrap";

import $ from 'jquery'

import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpg";
import card5 from "./img/card5.jpg";
import { RiCloseLine } from "react-icons/ri";

const WishList = () => {

    // Onclick Remove Products
    $(".cr-remove-product").on("click", function () {
        $(this).parent().parent().parent().parent(".cr-product-box").remove();
        var wish_product_count = $(".cr-product-box").length;
        if (wish_product_count == 0) {
            $('.section-wishlist').html('<p class="cr-wishlist-msg">Your wishlist is empty!</p>');
            $('.section-compare').html('<p class="cr-wishlist-msg">Your compare list is empty!</p>');
        }
    });

    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Wishlist</h2>
                                    <span>
                                        <a href="#">Home</a> - Wishlist
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* wishlist */}
            <section className='w-100 d-block py-100 section-wishlist'>
                <Container>
                    <Row>
                        <Col lg={3} sm={6} xs={12} className='cr-product-box mb-24 vegetable'>
                            <div className="cr-product-card bg-white d-flex flex-column">
                                <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                    <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card5} alt="card5" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="cr-remove-product d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <RiCloseLine className='remove' />
                                        </a>
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
                                        <a href="#" className='d-flex justify-content-center'>Vegetables</a>
                                        <div className="cr-star d-flex justify-content-center align-items-center">
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaStar className='star' />
                                            <FaRegStar className='star' />
                                            <p className='rate'>(4.5)</p>
                                        </div>
                                    </div>
                                    <a href="#" className="title d-flex justify-content-center">Fresh organic villa farm lomon 500gm pack</a>
                                    <p className="cr-price">
                                        <span className="new-price">$120</span>
                                        <span className="old-price">$123.25</span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} xs={12} className='cr-product-box mb-24 snack'>
                            <div className="cr-product-card bg-white d-flex flex-column">
                                <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                    <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card1} alt="card1" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="cr-remove-product d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <RiCloseLine className='remove' />
                                        </a>
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

                        <Col lg={3} sm={6} xs={12} className='cr-product-box mb-24 fruit'>
                            <div className="cr-product-card bg-white d-flex flex-column">
                                <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                    <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card2} alt="card2" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="cr-remove-product d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <RiCloseLine className='remove' />
                                        </a>
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

                        <Col lg={3} sm={6} xs={12} className='cr-product-box mb-24 fruit'>
                            <div className="cr-product-card bg-white d-flex flex-column">
                                <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                    <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                        <img src={card3} alt="card3" className='img d-block m-auto' />
                                    </div>
                                    <div className="cr-side-view position-absolute d-grid opacity-0">
                                        <a href="javascript:void(0)" className="cr-remove-product d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <RiCloseLine className='remove' />
                                        </a>
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
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WishList;