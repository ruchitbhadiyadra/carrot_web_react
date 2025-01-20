import './Cart.css';
import { Container, Form, Row, Table, Button, Col } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';

import card1 from './img/card1.jpg';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';
import card5 from './img/card5.jpg';
import card6 from './img/card6.jpg';
import card7 from './img/card7.jpg';
import card8 from './img/card8.jpg';
import card14 from './img/card14.jpg';
import { FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoBagOutline } from 'react-icons/io5';

const Cart = () => {
    return (
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Cart</h2>
                                    <span>
                                        <a href="#">Home</a> / Cart
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* cart */}
            <section className='section-cart pt-100'>
                <Container>
                    <Row>
                        <Col lg={12} sm={12} xs={4}>
                            <div className="cr-cart-content">
                                <Row>
                                    <Form>
                                        <div className="cr-table-content">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>price</th>
                                                        <th className='text-center'>Quantity</th>
                                                        <th>Total</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='cr-cart-name'>
                                                            <a href="#">
                                                                <img src={card5} alt="card5" className='cr-cart-img' />Organic Lemon
                                                            </a>
                                                        </td>
                                                        <td className="cr-cart-price">
                                                            <span className="amount">$56.00</span>
                                                        </td>
                                                        <td className="cr-cart-qty">
                                                            <div className="cart-qty-plus-minus">
                                                                <Button type="button" className="plus">+</Button>
                                                                <input type="text" placeholder="." value="1" minLength="1" maxLength="20" className="quantity" />
                                                                <Button type="button" className="minus">-</Button>
                                                            </div>
                                                        </td>
                                                        <td className="cr-cart-subtotal">$56.00</td>
                                                        <td className="cr-cart-remove">
                                                            <a href="javascript:void(0)">
                                                                <RiDeleteBin6Line className='bin' />
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='cr-cart-name'>
                                                            <a href="#">
                                                                <img src={card2} alt="card5" className='cr-cart-img' />Apple Juice
                                                            </a>
                                                        </td>
                                                        <td className="cr-cart-price">
                                                            <span className="amount">$75.00</span>
                                                        </td>
                                                        <td className="cr-cart-qty">
                                                            <div className="cart-qty-plus-minus">
                                                                <Button type="button" className="plus">+</Button>
                                                                <input type="text" placeholder="." value="1" minLength="1" maxLength="20" className="quantity" />
                                                                <Button type="button" className="minus">-</Button>
                                                            </div>
                                                        </td>
                                                        <td className="cr-cart-subtotal">$75.00</td>
                                                        <td className="cr-cart-remove">
                                                            <a href="javascript:void(0)">
                                                                <RiDeleteBin6Line className='bin' />
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='cr-cart-name'>
                                                            <a href="#">
                                                                <img src={card3} alt="card5" className='cr-cart-img' />Watermelon 5kg Pack
                                                            </a>
                                                        </td>
                                                        <td className="cr-cart-price">
                                                            <span className="amount">$48.00</span>
                                                        </td>
                                                        <td className="cr-cart-qty">
                                                            <div className="cart-qty-plus-minus">
                                                                <Button type="button" className="plus">+</Button>
                                                                <input type="text" placeholder="." value="1" minLength="1" maxLength="20" className="quantity" />
                                                                <Button type="button" className="minus">-</Button>
                                                            </div>
                                                        </td>
                                                        <td className="cr-cart-subtotal">$48.00</td>
                                                        <td className="cr-cart-remove">
                                                            <a href="javascript:void(0)">
                                                                <RiDeleteBin6Line className='bin' />
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='cr-cart-name'>
                                                            <a href="#">
                                                                <img src={card6} alt="card5" className='cr-cart-img' />Pomegranate 5 kg pack
                                                            </a>
                                                        </td>
                                                        <td className="cr-cart-price">
                                                            <span className="amount">$90.00</span>
                                                        </td>
                                                        <td className="cr-cart-qty">
                                                            <div className="cart-qty-plus-minus">
                                                                <Button type="button" className="plus">+</Button>
                                                                <input type="text" placeholder="." value="1" minLength="1" maxLength="20" className="quantity" />
                                                                <Button type="button" className="minus">-</Button>
                                                            </div>
                                                        </td>
                                                        <td className="cr-cart-subtotal">$90.00</td>
                                                        <td className="cr-cart-remove">
                                                            <a href="javascript:void(0)">
                                                                <RiDeleteBin6Line className='bin' />
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='cr-cart-name'>
                                                            <a href="#">
                                                                <img src={card14} alt="card5" className='cr-cart-img' />Organic Peach Fruits
                                                            </a>
                                                        </td>
                                                        <td className="cr-cart-price">
                                                            <span className="amount">$50.00</span>
                                                        </td>
                                                        <td className="cr-cart-qty">
                                                            <div className="cart-qty-plus-minus">
                                                                <Button type="button" className="plus">+</Button>
                                                                <input type="text" placeholder="." value="1" minLength="1" maxLength="20" className="quantity" />
                                                                <Button type="button" className="minus">-</Button>
                                                            </div>
                                                        </td>
                                                        <td className="cr-cart-subtotal">$50.00</td>
                                                        <td className="cr-cart-remove">
                                                            <a href="javascript:void(0)">
                                                                <RiDeleteBin6Line className='bin' />
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>

                                        <Row>
                                            <Col lg={12} xs={4} className='my-2'>
                                                <div className="cr-cart-update-bottom">
                                                    <a href="javascript:void(0)" className="cr-links">Continue Shopping</a>
                                                    <a href="cart.html" className="cr-button">
                                                        Check Out
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Popular Product */}
            <section className='section-popular-product-shape pb-100 position-relative'>
                <Container className='container aos-init aos-animate'>
                    <Row>
                        <div className="col-lg-12">
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Popular Products</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis. </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className='product-content mb-minus-24'>
                        <Row>
                            <Col sm={12}>
                                <Row className='mb-minus-24'>

                                    <Col md={2} className='mb-24 snack'>
                                        <div className="cr-product-card bg-white d-flex flex-column">
                                            <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                                    <Col md={2} className='mb-24 snack'>
                                        <div className="cr-product-card bg-white d-flex flex-column">
                                            <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                                    <Col md={2} className='mb-24 vegetable'>
                                        <div className="cr-product-card bg-white d-flex flex-column">
                                            <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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
                                                    <span className="new-price">$120</span>
                                                    <span className="old-price">$123.25</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md={2} className='mb-24 fruit'>
                                        <div className="cr-product-card bg-white d-flex flex-column">
                                            <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                                    <Col md={2} className='mb-24 snack'>
                                        <div className="cr-product-card bg-white d-flex flex-column">
                                            <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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

                                    <Col md={2} className='mb-24 bakery'>
                                        <div className="cr-product-card bg-white d-flex flex-column">
                                            <div className="cr-product-image d-flex justify-content-center position-relative align-items-center">
                                                <div className="cr-image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
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
                                                    <span className="old-price">$22.10</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Cart;