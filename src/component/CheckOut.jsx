import { Col, Container, Row } from 'react-bootstrap';
import './CheckOut.css';
import { FaAngleDown, FaRegStar, FaStar } from 'react-icons/fa';

import card4 from './img/card4.jpg'
import card10 from './img/card10.jpg'
import payment from './img/payment.png'

const CheckOut = () => {
    return(
        <>
            {/* breadcrumb */}
            <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Checkout</h2>
                                    <span>
                                        <a href="#">Home</a> - Checkout
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* checkout section */}
            <section className='cr-checkout-section py-100'>
                <Container>
                    <Row>
                        <div className="cr-checkout-rightsidebar col-lg-4 col-md-12">
                            <div className="cr-sidebar-wrap">
                                <div className="cr-sidebar-block">
                                    <div className="cr-sb-title">
                                        <h3 className="cr-sidebar-title">Summary</h3>
                                    </div>
                                    <div className="cr-sb-block-content">
                                        <div className="cr-checkout-summary">
                                            <div>
                                                <span className="text-left">Sub-Total</span>
                                                <span className="text-right">$80.00</span>
                                            </div>
                                            <div>
                                                <span className="text-left">Delivery Charges</span>
                                                <span className="text-right">$80.00</span>
                                            </div>
                                            <div className="cr-checkout-summary-total">
                                                <span className="text-left">Total Amount</span>
                                                <span className="text-right">$80.00</span>
                                            </div>
                                        </div>

                                        <div className="cr-checkout-pro">
                                            <div className="col-sm-12 mb-6">
                                                <div className="cr-product-inner">
                                                    <div className="cr-pro-image-outer">
                                                        <div className="cr-pro-image">
                                                            <a href="product-left-sidebar.html" className="image">
                                                                <img className="main-image" src={card4} alt="Product" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="cr-pro-content cr-product-details">
                                                        <h5 className="cr-pro-title"><a href="product-left-sidebar.html">Dates Value Pack Pouch</a></h5>
                                                        <div className="cr-pro-rating">
                                                            <FaStar className='star' />
                                                            <FaStar className='star' />
                                                            <FaStar className='star' />
                                                            <FaStar className='star' />
                                                            <FaRegStar className='star' />
                                                        </div>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 mb-0">
                                                <div className="cr-product-inner">
                                                    <div className="cr-pro-image-outer">
                                                        <div className="cr-pro-image">
                                                            <a href="product-left-sidebar.html" className="image">
                                                                <img className="main-image" src={card10} alt="Product" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="cr-pro-content cr-product-details">
                                                        <h5 className="cr-pro-title"><a href="product-left-sidebar.html">Smoked Honey Spiced Nuts</a></h5>
                                                        <div className="cr-pro-rating">
                                                            <FaStar className='star' />
                                                            <FaStar className='star' />
                                                            <FaStar className='star' />
                                                            <FaStar className='star' />
                                                            <FaRegStar className='star' />
                                                        </div>
                                                        <p className="cr-price">
                                                            <span className="new-price">$120.25</span>
                                                            <span className="old-price">$123.25</span>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='cr-sidebar-wrap cr-checkout-del-wrap'>
                                <div className="cr-sidebar-block">
                                    <div className="cr-sb-title">
                                        <h3 className="cr-sidebar-title">Delivery Method</h3>
                                    </div>
                                    <div className="cr-sb-block-content">
                                        <div className="cr-checkout-del">
                                            <div className="cr-del-desc">Please select the preferred shipping method to use on this
                                                order.</div>
                                            <form action="#">
                                                <span className="cr-del-option">
                                                    <span>
                                                        <span className="cr-del-opt-head">Free Shipping</span>
                                                        <input type="radio" id="del1" name="radio-group" checked />
                                                        <label for="del1">Rate - $0 .00</label>
                                                    </span>
                                                    <span>
                                                        <span className="cr-del-opt-head">Flat Rate</span>
                                                        <input type="radio" id="del2" name="radio-group" />
                                                        <label for="del2">Rate - $5.00</label>
                                                    </span>
                                                </span>
                                                <span className="cr-del-commemt">
                                                    <span className="cr-del-opt-head">Add Comments About Your Order</span>
                                                    <textarea name="your-commemt" placeholder="Comments"></textarea>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cr-sidebar-wrap cr-checkout-pay-wrap">
                                <div className="cr-sidebar-block">
                                    <div className="cr-sb-title">
                                        <h3 className="cr-sidebar-title">Payment Method</h3>
                                    </div>
                                    <div className="cr-sb-block-content">
                                        <div className="cr-checkout-pay">
                                            <div className="cr-pay-desc">Please select the preferred payment method to use on this
                                                order.</div>
                                            <form action="#" className="payment-options">
                                                <span className="cr-pay-option">
                                                    <span>
                                                        <input type="radio" id="pay1" name="radio-group" checked />
                                                        <label for="pay1">Cash On Delivery</label>
                                                    </span>
                                                </span>
                                                <span className="cr-pay-option">
                                                    <span>
                                                        <input type="radio" id="pay2" name="radio-group" />
                                                        <label for="pay2">UPI</label>
                                                    </span>
                                                </span>
                                                <span className="cr-pay-option">
                                                    <span>
                                                        <input type="radio" id="pay3" name="radio-group" />
                                                        <label for="pay3">Bank Transfer</label>
                                                    </span>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='cr-sidebar-wrap cr-check-pay-img-wrap'>
                                <div className="cr-sidebar-block">
                                    <div className="cr-sb-title">
                                        <h3 className="cr-sidebar-title">Payment Method</h3>
                                    </div>
                                    <div className="cr-sb-block-content">
                                        <div className="cr-check-pay-img-inner">
                                            <div className="cr-check-pay-img">
                                                <img src={payment} alt="payment" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cr-checkout-leftsidebar col-lg-8 col-md-12">
                            <div className="cr-checkout-content">
                                <div className="cr-checkout-inner">
                                    <div className="cr-checkout-wrap mb-30">
                                        <div className='cr-checkout-block cr-check-new'>
                                            <h3 className='cr-checkout-title'>New Customer</h3>
                                            <div className='cr-check-block-content'>
                                                <div className="cr-check-subtitle">Checkout Options</div>
                                                <form action="#">
                                                    <span className="cr-new-option">
                                                        <span>
                                                            <input type="radio" id="account1" name="radio-group" checked />
                                                            <label for="account1">Register Account</label>
                                                        </span>
                                                        <span>
                                                            <input type="radio" id="account2" name="radio-group" />
                                                            <label for="account2">Guest Account</label>
                                                        </span>
                                                    </span>
                                                </form>
                                                <div className="cr-new-desc">
                                                    By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                                                </div>
                                                <span>
                                                    <button className="cr-button mt-30" type="submit">Continue</button>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="cr-checkout-block cr-check-login">
                                            <h3 className="cr-checkout-title">Returning Customer</h3>
                                            <div className="cr-check-login-form">
                                                <form action="#" method="post">
                                                    <span className="cr-check-login-wrap">
                                                        <label>Email Address</label>
                                                        <input type="text" name="name" placeholder="Enter your email address" required />
                                                    </span>
                                                    <span className="cr-check-login-wrap">
                                                        <label>Password</label>
                                                        <input type="password" name="password" placeholder="Enter your password" required />
                                                    </span>

                                                    <span className="cr-check-login-wrap cr-check-login-btn">
                                                        <button className="cr-button mr-15" type="submit">Login</button>
                                                        <a className="cr-check-login-fp" href="#">Forgot Password?</a>
                                                    </span>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cr-checkout-wrap">
                                        <div className="cr-checkout-block cr-check-bill">
                                            <h3 className="cr-checkout-title">Billing Details</h3>
                                            <div className="cr-bl-block-content">
                                                <div className="cr-check-subtitle">Checkout Options</div>
                                                <span className="cr-bill-option">
                                                    <span>
                                                        <input type="radio" id="bill1" name="radio-group" />
                                                        <label for="bill1">I want to use an existing address</label>
                                                    </span>
                                                    <span>
                                                        <input type="radio" id="bill2" name="radio-group" checked />
                                                        <label for="bill2">I want to use new address</label>
                                                    </span>
                                                </span>
                                                <div className="cr-check-bill-form mb-minus-24">
                                                    <form action="#" method="post">
                                                        <span className="cr-bill-wrap cr-bill-half">
                                                            <label>First Name*</label>
                                                            <input type="text" name="firstname" placeholder="Enter your first name" required />
                                                        </span>
                                                        <span className="cr-bill-wrap cr-bill-half">
                                                            <label>Last Name*</label>
                                                            <input type="text" name="lastname" placeholder="Enter your last name" required />
                                                        </span>
                                                        <span className="cr-bill-wrap">
                                                            <label>Address</label>
                                                            <input type="text" name="address" placeholder="Address Line 1" />
                                                        </span>
                                                        <span className="cr-bill-wrap cr-bill-half">
                                                            <label>City *</label>
                                                            <span className="cr-bl-select-inner">
                                                                <select name="cr_select_city" id="cr-select-city" className="cr-bill-select">
                                                                    <option selected disabled>City</option>
                                                                    <option value="1">City 1</option>
                                                                    <option value="2">City 2</option>
                                                                    <option value="3">City 3</option>
                                                                    <option value="4">City 4</option>
                                                                    <option value="5">City 5</option>
                                                                </select>
                                                                <FaAngleDown className='down' />
                                                            </span>
                                                        </span>
                                                        <span className="cr-bill-wrap cr-bill-half">
                                                            <label>Post Code</label>
                                                            <input type="text" name="postalcode" placeholder="Post Code" />
                                                        </span>
                                                        <span className="cr-bill-wrap cr-bill-half">
                                                            <label>Country *</label>
                                                            <span className="cr-bl-select-inner">
                                                                <select name="cr_select_country" id="cr-select-country" className="cr-bill-select">
                                                                    <option selected="" disabled="">Country</option>
                                                                    <option value="1">Country 1</option>
                                                                    <option value="2">Country 2</option>
                                                                    <option value="3">Country 3</option>
                                                                    <option value="4">Country 4</option>
                                                                    <option value="5">Country 5</option>
                                                                </select>
                                                                <FaAngleDown className='down' />
                                                            </span>
                                                        </span>
                                                        <span className="cr-bill-wrap cr-bill-half">
                                                            <label>Region State</label>
                                                            <span className="cr-bl-select-inner">
                                                                <select name="cr_select_state" id="cr-select-state" className="cr-bill-select">
                                                                    <option selected="" disabled="">Region/State</option>
                                                                    <option value="1">Region/State 1</option>
                                                                    <option value="2">Region/State 2</option>
                                                                    <option value="3">Region/State 3</option>
                                                                    <option value="4">Region/State 4</option>
                                                                    <option value="5">Region/State 5</option>
                                                                </select>
                                                                <FaAngleDown className='down' />
                                                            </span>
                                                        </span>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <span className="cr-check-order-btn">
                                        <a className="cr-button mt-30" href="#">Place Order</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CheckOut