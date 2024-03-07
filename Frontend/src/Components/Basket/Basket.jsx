import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import { Footer } from '../Footer/Footer';
import './Basket.css';

function BasketPage() {

  return (
    <div>
      <Navbar />
      <div>
      <div>
  <h2>Your Basket</h2>
  <p className='msg'>There are {1} products in your basket</p>
  <div className='basket-summary'>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src='https://via.placeholder.com/150' alt='product' /></td>
      <td id="unit-price" className="w-10">{10}</td> 
      <td className="w-10"><input className="form-control" type='number' value='1' /></td> 
      <td id="subtotal" className="w-10">{10}</td> 
      <td className="w-10"><button className="btn btn-danger">Remove</button></td> 
    </tr>
  </tbody>
</table>

    <div className='continue-shopping'>
      <button className="btn btn-primary">Continue Shopping</button>
    </div>
  </div>
  <div className='checkout'>
    <h3>Subtotal: $10.00</h3>
    <button className="btn btn-success">Proceed to Checkout</button>
  </div>
</div>
</div>

    
      < Footer />
    </div>
  );
}

export default BasketPage;
