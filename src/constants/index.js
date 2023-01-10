import {
    faBars, faSearch, faShoppingCart, faUser,
} from '@fortawesome/free-solid-svg-icons';
// images import
import { green11, minired12, purple12 } from '../assets';

export const navBtns = [
    { name: 'menu', icon: faBars, action: 'Menu' },
    { name: 'search', icon: faSearch, action: 'Search' },
    { name: 'cart', icon: faShoppingCart, action: 'Cart' },
    { name: 'user', icon: faUser, action: 'Login' },
]

export const navLinks = [
    { id: 1, href: 'home' },
    { id: 2, href: 'features' },
    { id: 3, href: 'products' },
    { id: 4, href: 'categories' },
    { id: 5, href: 'reviews' },
]

export const products = [
    { name: "iphone 11", imgUrl: green11, price: "4.99$", quantity: 1 },
    { name: "iphone 12 mini", imgUrl: minired12, price: "4.99$", quantity: 1 },
    { name: "iphone 12", imgUrl: purple12, price: "4.99$", quantity: 1 },
]