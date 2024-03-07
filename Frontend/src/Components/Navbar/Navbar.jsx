import React from 'react'
import {Nav, Button, Card, Container} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
import All from '../Assets/Dropdown/All';
import Books from '../Assets/Dropdown/Books';
import Apparel from '../Assets/Dropdown/Apparel';
import Electronics from '../Assets/Dropdown/Electronics';
import Kitchen from '../Assets/Dropdown/Kitchen';
import SportsLeisure from '../Assets/Dropdown/Sports&Leisure';
import Supplies from '../Assets/Dropdown/Supplies';
import './Navbar.css'


export const Navbar = () => {
  return (
    <div>
  <div className="px-5"> {/* Add padding here */}
  <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand">Hello, <a href='/login'>sign in</a> or  <a href='/signup'>register</a></div>

      <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>
      <div variant="primary" className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Sell</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Watchlist</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Basket"><FaShoppingCart /></a>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
</div>
<div className="px-5"> {/* padding */}
  <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-brand">Campus <span style={{ color: 'red' }}>Price</span></div>
      <form class="d-flex" id='search-form'>
              <input id = "search-input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '400px' }}/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

      <div variant="primary" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link d-none d-md-block" href="#">Category</a>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
  <Nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>
        <div className="d-flex mx-auto" style={ {backgroundColor: 'teal'}}>
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <a className="nav-link" href="#"><All /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Books /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Apparel /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Electronics /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Kitchen /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><SportsLeisure /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><Supplies /></a>
          </li>
        </ul>
      </div>
    </div>
  </Nav>
</div>
</div>

  )
}

export default Navbar