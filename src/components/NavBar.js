import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAppleWhole, faBars, faSearch, faShoppingCart, faUser
} from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';

export const NavBar = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeShop, setActiveShop] = useState(false)
    const [activeLogin, setActiveLogin] = useState(false)
    const [activeNav, setActiveNav] = useState(false)

    let searchForm = document.querySelector('.search-form');
    let shoppingCart = document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');
    let navbar = document.querySelector('.navbar');

    function handleSearch(e) {
        e.preventDefault();
        setActiveSearch(!activeSearch)
        setActiveShop(false)
        setActiveLogin(false)
        setActiveNav(false)
    }

    const removeActivedClass = () => {
        setActiveSearch(false)
        setActiveShop(false)
        setActiveLogin(false)
        setActiveNav(false)
    }
    useEffect(() => {
        const onScroll = () => {
            removeActivedClass();
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return (
        <Navbar expand="md" className="header">
            <Container>
                <Navbar.Brand href="#home">
                    <a className="header__logo" href="#home"><FontAwesomeIcon icon={faAppleWhole} />Apple </a>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar">
                        <Nav.Link href="#home" className="">home</Nav.Link>
                        <Nav.Link href="#features" className="">features</Nav.Link>
                        <Nav.Link href="#products" className="">products</Nav.Link>
                        <Nav.Link href="#categories" className="">categories</Nav.Link>
                        <Nav.Link href="#review" className="">review</Nav.Link>
                    </Nav>
                    <div class="icons">
                        <FontAwesomeIcon className='fa-icon' id='menu-btn' icon={faBars} />
                        <FontAwesomeIcon className='fa-icon' id='search-btn' icon={faSearch} onClick={handleSearch} />
                        <FontAwesomeIcon className='fa-icon' id='cart-btn' icon={faShoppingCart} />
                        <FontAwesomeIcon className='fa-icon' id='user-btn' icon={faUser} />
                    </div>
                </Navbar.Collapse>
                <Form className={`search-form ${activeSearch ? 'active' : ''}`}>
                    <Form.Group >
                        <Form.Control type="search" id="search-box" placeholder="search here..." />
                        <Form.Label className='search-label'>
                            <FontAwesomeIcon className='fa-icon' id='user-btn' icon={faSearch} />
                        </Form.Label>
                    </Form.Group>
                </Form>
            </Container >
        </Navbar>
    )
}