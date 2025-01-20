// css
import './Category_LeftSidebar.css'

// import react from react
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CiCircleList, CiGrid41 } from "react-icons/ci";

// img
import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';
import card5 from './img/card5.jpg';
import card7 from './img/card7.jpg';
import card8 from './img/card8.jpg';
import card9 from './img/card9.jpg';
import card10 from './img/card10.jpg';

// icon
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";


// Range Slider
// $(function () {
//     $("#slider-range").slider({
//         range: true,
//         min: 20,
//         max: 300,
//         values: [0, 250],
//         slide: function (event, ui) {
//             $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
//         },
//     });
//     $("#amount").val(
//         "$" +
//         $("#slider-range").slider("values", 0) +
//         " - $" +
//         $("#slider-range").slider("values", 1)
//     );
// });

const Category_LeftSidebar = () => {

    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Shop</h2>
                                    <span>
                                        <a href="#">Home</a> - Shop
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Shop */}
            <div className="section-shop py-100">
                <Container>
                    <Row>
                        <Col lg={3} xs={12}>
                            <div className="cr-shop-sideview">

                                <div className="cr-shop-categories">
                                    <h4 className="cr-shop-sub-title">Category</h4>
                                    <div className="cr-checkbox">

                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="drinks" />
                                            <label htmlFor="drinks" className='position-relative'>Juice & Drinks</label>
                                            <span>[20]</span>
                                        </div>

                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="drinks" />
                                            <label htmlFor="drinks" className='position-relative'>Dairy & Milk</label>
                                            <span>[54]</span>
                                        </div>

                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="drinks" />
                                            <label htmlFor="drinks" className='position-relative'>Snack & Spice</label>
                                            <span>[64]</span>
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="cr-shop-price">
                                    <h4 className="cr-shop-sub-title">Price</h4>
                                    <div className="price-range-slider">
                                        <div id="slider-range" className="range-bar"></div>
                                        <p className="range-value">
                                            <label>Price :</label>
                                            <input type="text" id="amount" placeholder="'" readOnly />
                                        </p>
                                        <button type="button" className="cr-button">Filter</button>
                                    </div>
                                </div> */}

                                <div className="cr-shop-color">
                                    <h4 className="cr-shop-sub-title">Colors</h4>
                                    <div className="cr-checkbox">
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="blue" />
                                            <label for="blue">Blue</label>
                                            <span className="blue"></span>
                                        </div>
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="yellow" />
                                            <label for="yellow">Yellow</label>
                                            <span className="yellow"></span>
                                        </div>
                                        <div className="checkbox-group d-flex align-items-center position-relative">
                                            <input type="checkbox" id="red" />
                                            <label for="red">Red</label>
                                            <span className="red"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-shop-weight">
                                    <h4 className="cr-shop-sub-title">Weight</h4>
                                    <div className="cr-checkbox">
                                        <div className="checkbox-group">
                                            <input type="checkbox" id="2kg" />
                                            <label for="2kg">2kg Pack</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input type="checkbox" id="20kg" />
                                            <label for="20kg">20kg Pack</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input type="checkbox" id="30kg" />
                                            <label for="30kg">30kg pack</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="cr-shop-tags">
                                    <h4 className="cr-shop-sub-title">Tages</h4>
                                    <div className="cr-shop-tags-inner">
                                        <ul className="cr-tags">
                                            <li><Button>Vegetables</Button></li>
                                            <li><Button>juice</Button></li>
                                            <li><Button>Food</Button></li>
                                            <li><Button>Dry Fruits</Button></li>
                                            <li><Button>Vegetables</Button></li>
                                            <li><Button>juice</Button></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </Col>

                        <Col lg={9} xs={12}>
                            <Row>
                                <Col xs={12}>
                                    <div className="cr-shop-bredekamp d-flex flex-wrap align-items-center">
                                        <div className="cr-toggle d-flex">
                                            <a href="javascript:void(0)" className="gridCol active-grid d-flex justify-content-center align-items-center">
                                                <CiGrid41 />
                                            </a>
                                            <a href="javascript:void(0)" className="gridRow d-flex justify-content-center align-items-center">
                                                <CiCircleList />
                                            </a>
                                        </div>
                                        <div className="center-content d-flex align-items-center">
                                            <span>We found 29 items for you!</span>
                                        </div>
                                        <div className="cr-select d-flex">
                                            <label>Sort By :</label>
                                            <select className="form-select">
                                                <option selected="">Featured</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='col-100 mb-minus-24'>
                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                <img src={card5} alt="card5" className='img d-block m-auto' />
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
                                                <span className="new-price">$120.25</span>
                                                <span className="old-price">$123.25</span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
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

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
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

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                <img src={card7} alt="card7" className='img d-block m-auto' />
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
                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <p className='rate'>(5.0)</p>
                                                </div>
                                            </div>
                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                            <p className="cr-price">
                                                <span className="new-price">$20</span>
                                                <span className="old-price">$22</span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                <img src={card9} alt="card9" className='img d-block m-auto' />
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
                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                <div className="cr-star d-flex justify-content-center align-items-center">
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
                                                <span className="new-price">$120.25</span>
                                                <span className="old-price">$123.25</span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                                <img src={card8} alt="card8" className='img d-block m-auto' />
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
                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <p className='rate'>(5.0)</p>
                                                </div>
                                            </div>
                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                            <p className="cr-price">
                                                <span className="new-price">$50.30</span>
                                                <span className="old-price">$72.60</span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                <img src={card10} alt="card10" className='img d-block m-auto' />
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
                                                <a href="#" className='d-flex justify-content-center'>Bakery</a>
                                                <div className="cr-star d-flex justify-content-center align-items-center">
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <FaStar className='star' />
                                                    <p className='rate'>(5.0)</p>
                                                </div>
                                            </div>
                                            <a href="#" className="title d-flex justify-content-center">Delicious white baked fresh bread and toast</a>
                                            <p className="cr-price">
                                                <span className="new-price">$120.25</span>
                                                <span className="old-price">$123.25</span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                                <img src={card5} alt="card5" className='img d-block m-auto' />
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
                                                <span className="new-price">$120.25</span>
                                                <span className="old-price">$123.25</span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
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

                                <Col xxl={3} xl={4} sm={4} xs={12} className="cr-product-box mb-24">
                                    <div className="product-card bg-white d-flex flex-column">
                                        <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                            <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                            </Row>

                            <nav className="cr-pagination d-flex justify-content-center my-2">
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Category_LeftSidebar;