import { useState, useEffect } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { navLinks, navBtns, products } from '../constants';

export const NavBar = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [activeCart, setActiveCart] = useState(false)
    const [activeLogin, setActiveLogin] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('home');

    const [enabled, setEnabled] = useState(false);
    const handleActive = (value) => {
        let act = 'active' + value;
        const actions = {
            activeSearch: setActiveSearch,
            activeCart: setActiveCart,
            activeLogin: setActiveLogin,
            activeMenu: setActiveMenu
        };
        for (let key in actions) {
            if (actions.hasOwnProperty(key)) {
                if (act === key) {
                    actions[key](!enabled);
                    setEnabled(!enabled);
                }
                else {
                    actions[key](false);
                }
            }

        }
    };

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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className="header" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">
                    <a className="header__logo"><FontAwesomeIcon icon={faApple} /></a>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {
                            navLinks.map((link) =>
                                <Nav.Link key={link.id} href={`#${link.href}`} className={activeLink === `${link.href}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(link.href)}>{link.href}</Nav.Link>
                            )
                        }
                    </Nav>
                    <div className="icons">
                        {
                            navBtns.map((button, index) => {
                                return (
                                    <div key={index} id={`${button.name}-btn`} onClick={() => handleActive(button.action)}>
                                        <FontAwesomeIcon className='fa-icon' icon={button.icon} />
                                    </div>
                                )
                            })
                        }
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
                <a href="#" className="pri-btn">Checkout</a>
            </div>
            <Form className={`login-form ${activeLogin ? 'active' : ''}`}>
                <h3>Login now</h3>
                <Form.Control type="email" className="box" placeholder="Enter your email address" />
                <Form.Control type="password" className="box" placeholder="Enter your password" />
                <p>forget your password <a href="#">click here</a></p>
                <p>don't have an account <a href="#">create now</a></p>
                <a href="#" className="pri-btn">Login now</a>
            </Form>
        </Navbar>
    )
}