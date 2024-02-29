import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'
import Books from '../Assets/Dropdown/Books';
import Supplies from '../Assets/Dropdown/Supplies';
import Apparel from '../Assets/Dropdown/Apparel';
import SportsLeisure from '../Assets/Dropdown/Sports&Leisure';
import Food from '../Assets/Dropdown/Food';
import Kitchen from '../Assets/Dropdown/Kitchen';
import Electronics from '../Assets/Dropdown/Electronics';


export const Navbar = () => {
  return (
    <div>
        <div className="header">
            <p className='hello'>Hello, <a href='/login'>sign in</a> or  <a href='/'>register</a> </p>
            <div className="header-items">
                <ul>
                    <li><a href="#">Sell</a></li>
                    <li><a href="#">Watchlist</a></li>
                    <li><a href="#"><FaUser /></a></li>
                    <li><a href="/Basket"><FaShoppingCart /></a></li>
                </ul>
            </div>
        </div>
        <nav className="navbar">
            <div className="logo">
            <h1>Campus<span>Price</span></h1>
            </div>
            <div className="search">
                <input className="search-input" type="text" placeholder="Search for anything..." />
                <span><button className='search-button'><FaSearch /></button></span>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Shop by Category<FaCaretDown /></a></li>
                </ul>
            </div>
        </nav>
        <categories>
            <ul>
                <li><a href="#"><FaBars />All</a></li>
                <li><a href="#"><Books /></a></li>
                <li><a href="#"><Supplies/></a></li>
                <li><a href="#"><Apparel/></a></li>
                <li><a href="#"><SportsLeisure/></a></li>
                <li><a href="#"><Food/></a></li>
                <li><a href="#"><Kitchen/></a></li>
                <li><a href="#"><Electronics /></a></li>
            </ul>
        </categories>
    </div>
  )
}

export default Navbar