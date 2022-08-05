import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars, faSearch, faShoppingCart, faUser, faTrash
} from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import Form from 'react-bootstrap/Form';
// images import
import product1 from "../assets/img/iphone-xi-xanhla-600x600.jpg"
import product2 from "../assets/img/iphone-12-mini-do-600x600.jpeg"
import product3 from "../assets/img/iphone-12-tim-1-600x600.jpg"
import { Container } from 'react-bootstrap';

export const NavBar = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeCart, setActiveCart] = useState(false)
    const [activeLogin, setActiveLogin] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('home');

    function handleSearch(e) {
        e.preventDefault();
        setActiveSearch(!activeSearch)
        setActiveCart(false)
        setActiveLogin(false)
        setActiveMenu(false)
    }

    function handleCart(e) {
        e.preventDefault();
        setActiveSearch(false)
        setActiveCart(!activeCart)
        setActiveLogin(false)
        setActiveMenu(false)
    }

    function handleLogin(e) {
        e.preventDefault();
        setActiveSearch(false)
        setActiveCart(false)
        setActiveLogin(!activeLogin)
        setActiveMenu(false)
    }

    function handleMenu(e) {
        e.preventDefault();
        setActiveSearch(false)
        setActiveCart(false)
        setActiveLogin(false)
        setActiveMenu(!activeMenu)
    }

    const removeActivedClass = () => {
        setActiveSearch(false)
        setActiveCart(false)
        setActiveLogin(false)
        setActiveMenu(false)
    }

    useEffect(() => {
        const onScroll = () => {
            removeActivedClass();
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const products = [
        { name: "iphone 11", imgUrl: product1, price: "4.99$", quantity: 1 },
        { name: "iphone 12 mini", imgUrl: product2, price: "4.99$", quantity: 1 },
        { name: "iphone 12", imgUrl: product3, price: "4.99$", quantity: 1 },
    ]

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className="header">
            <Container>
                <Navbar.Brand href="#home">
                    <a className="header__logo"><FontAwesomeIcon icon={faApple} /></a>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span class="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>home</Nav.Link>
                        <Nav.Link href="#features" className={activeLink === 'features' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('features')}>features</Nav.Link>
                        <Nav.Link href="#products" className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('products')}>products</Nav.Link>
                        <Nav.Link href="#categories" className={activeLink === 'categories' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('categories')}>categories</Nav.Link>
                        <Nav.Link href="#review" className={activeLink === 'review' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('review')}>review</Nav.Link>
                    </Nav>
                    <div class="icons">
                        <div id='menu-btn' onClick={handleMenu}>
                            <FontAwesomeIcon className='fa-icon' icon={faBars} />
                        </div>
                        <div id='search-btn' onClick={handleSearch}>
                            <FontAwesomeIcon className='fa-icon' icon={faSearch} />
                        </div>
                        <div id='cart-btn' onClick={handleCart}>
                            <FontAwesomeIcon className='fa-icon' icon={faShoppingCart} />
                        </div>
                        <div id='user-btn' onClick={handleLogin}>
                            <FontAwesomeIcon className='fa-icon' icon={faUser} />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>

            <Form className={`search-form ${activeSearch ? 'active' : ''}`}>
                <Form.Control type="search" id="search-box" placeholder="search here..." />
                <Form.Label className='search-label'>
                    <FontAwesomeIcon className='fa-icon' id='user-btn' icon={faSearch} />
                </Form.Label>
            </Form>
            <div className={`shopping-cart ${activeCart ? 'active' : ''}`}>
                {
                    products.map((product, index) => {
                        return (
                            <div className="box" key={index}>
                                <FontAwesomeIcon className='trash-icon' icon={faTrash} />
                                <img src={product.imgUrl} alt={product.name} />
                                <div className="content">
                                    <h3>{product.name}</h3>
                                    <span className="price">Prc: {product.price}/</span>
                                    <span className="quantity">qty: {product.quantity}</span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="total">Total: 19.69$</div>
                <a href="#" className="btn">Checkout</a>
            </div>
            <Form className={`login-form ${activeLogin ? 'active' : ''}`}>
                <h3>Login now</h3>
                <Form.Control type="email" className="box" placeholder="Enter your email address" />
                <Form.Control type="password" className="box" placeholder="Enter your password" />
                <p>forget your password <a href="#">click here</a></p>
                <p>don't have an account <a href="#">create now</a></p>
                <Form.Control type="submit" className="btn" value="Login" />

            </Form>
        </Navbar>
    )
}