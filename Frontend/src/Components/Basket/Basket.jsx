import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './Basket.css';

function BasketPage() {

  return (
    <div>
      <Navbar />
      <h2>Your Basket</h2>
      <p className='msg'>There are 1 products in your basket</p>
      <div className='basket-summary'>
      <div className='item-header'>
        <ul>
          <li>Product</li>
          <li>Unit Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
          <li>Remove</li>
        </ul>
      </div>
      <div className='item-list'>
        <ul>
          <li><img src='https://via.placeholder.com/150' alt='product' /></li>
          <li>$10.00</li>
          <li><input type='number' value='1' /></li>
          <li>$10.00</li>
          <li><button>Remove</button></li>
        </ul>
      </div>
      <div className='continue-shopping'>
        <button>Continue Shopping</button>
      </div>
      </div>
      <div className='checkout'>
        <h3>Subtotal: $10.00</h3>
        <button>Proceed to Checkout</button>
      </div>
      
    
      < Footer />
    </div>
  );
}

export default BasketPage;
