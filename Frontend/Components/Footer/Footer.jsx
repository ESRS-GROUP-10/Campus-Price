import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import './Footer.css'


export const Footer = () => {
  return (
    <div>
    <div id="footer"> 
        <div id="section">
          
          <span id="title">Product Links</span>
          <ul>
          <li>Categories</li>
          <li>New Arrivals</li>
          <li>Features</li>
          <li>Collections</li>
          </ul>
        </div>
        <div id="section">
          <span id="title">Company</span>
          <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Services</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          </ul>
        </div>
        <div id="section">
          
          <span id="title">Join Our Newsletter</span>
          <ul>
          <li>Drop your Email below to get
update, promotion, coupons & more.</li>
          </ul>
        </div>
          
        </div>
        <div id="copyright">
            CopyRight © 2024 Campus Price All Right Reseved
          </div>
    </div>
  )
}
