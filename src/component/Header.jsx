// CSS
import './Header.css'

// import react from react
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Accordion, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

// img
import logo from './img/logo.png';

// icon
import { FaRegHeart, FaSearch, FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-header d-flex flex-row justify-content-between position-relative">
                                <a href="#" className='cr-logo'>
                                    <img src={logo} alt="logo" className='logo d-block' />
                                </a>
                                <form className='cr-search position-relative d-lg-block d-none'>
                                    <input type="text" className='search-input' placeholder='Search For items...' />
                                    <select className='form-select position-absolute'>
                                        <option selected>All Categories</option>
                                        <option value="1">Mens</option>
                                        <option value="2">Womens</option>
                                        <option value="3">Electronics</option>
                                    </select>
                                    <a href="#" className='search-btn position-absolute end-0 top-0 bottom-0 d-flex align-items-center justify-content-center'>
                                        <FaSearch className='search' />
                                    </a>
                                </form>
                                <div className="d-lg-block d-none">
                                    <div className='cr-right-bar d-flex'>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='me-2'>
                                                <FaRegUser className='user' />
                                                <span>Account</span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Checkout</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <a href="#" className='cr-right-bar-item d-flex align-items-center'>
                                            <FaRegHeart className='heart' />
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="#" className='cr-right-bar-item Shopping-toggle d-flex align-items-center'>
                                            <AiOutlineShoppingCart className='shopping' />
                                            <span>Cart</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Container>
                    <div className="header2">
                        <Navbar expand="lg" className='text-body'>
                            <Navbar.Brand>
                                <HiOutlineMenuAlt1 onClick={handleShow} variant="primary" className='border rounded-3' style={{ fontSize: '30px' }} />
                            </Navbar.Brand>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Home</Accordion.Header>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Products</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>product Left sidebar</li>
                                                    <li>product Right sidebar</li>
                                                    <li>Product Full Width</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Pages</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>About Us</li>
                                                    <li>contact Us</li>
                                                    <li>Cart</li>
                                                    <li>Checkout</li>
                                                    <li>Track Order</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Blog</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Shop Left sidebar</li>
                                                    <li>Shop Right sidebar</li>
                                                    <li>Full Width</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Products</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Shop Left sidebar</li>
                                                    <li>Shop Right sidebar</li>
                                                    <li>Product Full Width</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Navbar.Collapse id="basic-navbar-nav">

                                <Nav className="ms-auto mt-4 mx-5">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown title="Category" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/Category_LeftSidebar">Shop Left sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="/Category_RightSidebar">Shop Right sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="/Category_FullWidth">Full Width</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/Product_LeftSidebar">product Left sidebar </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product_RightSidebar">product Right sidebar </NavDropdown.Item>
                                        <NavDropdown.Item href="/Product_FullWidth">Product Full Width
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/about_us">About Us</NavDropdown.Item>
                                        <NavDropdown.Item href="/contact_us">Contact Us</NavDropdown.Item>
                                        <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                                        <NavDropdown.Item href="/checkout">Checkout</NavDropdown.Item>
                                        <NavDropdown.Item href="/trackorder">Track Order</NavDropdown.Item>
                                        <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
                                        <NavDropdown.Item href="/faq">Faq</NavDropdown.Item>
                                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                        <NavDropdown.Item href="/policy">Policy</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/blogleftsidebar">Left sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="/blogrightsidebar">Right sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="/blogfullwidth">Full Width</NavDropdown.Item>
                                        <NavDropdown.Item href="/blog-detail-left-sidebar">Details Left Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="/blog-detail-right-sidebar">Details Right Sidebar</NavDropdown.Item>
                                        <NavDropdown.Item href="/blog-detail-full-width">Details Full Width</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Elements" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/product">Products</NavDropdown.Item>
                                        <NavDropdown.Item href="/typography">Typography</NavDropdown.Item>
                                        <NavDropdown.Item href="/buttons">Buttons</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <div className=" ms-5 mt-4">
                                    <span>
                                        <IoCallOutline className='me-3' />
                                        +123 ( 456 ) ( 7890 )
                                    </span>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </Container >

            </header>
        </>
    )
}

export default Header;