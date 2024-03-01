import React from 'react'
import './Main.css'
import { FaArrowRight } from 'react-icons/fa';

export const Main = () => {
  return (
    <div>
        
        
        <div className='top-sellers'>
        <div className='top-seller-h2'><h2>Top Sellers</h2></div>
            <div className='top-sellers-items'>
                <div className='top-sellers-item'>
                    <img src='https://via.placeholder.com/150' alt='top-seller' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <div className='top-sellers-item'>
                    <img src='https://via.placeholder.com/150' alt='top-seller' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <div className='top-sellers-item'>
                    <img src='https://via.placeholder.com/150' alt='top-seller' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <div className='top-sellers-item'>
                    <img src='https://via.placeholder.com/150' alt='top-seller' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <p><a href="#">View All<FaArrowRight /></a></p>
            </div>
        </div>
        
        <div className='new-arrivals'>
            <div className='new-arrivals-h2'><h2>New Arrivals</h2></div>
            <div className='new-arrivals-items'>
                <div className='new-arrivals-item'>
                    <img src='https://via.placeholder.com/150' alt='new-arrivals' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <div className='new-arrivals-item'>
                    <img src='https://via.placeholder.com/150' alt='new-arrivals' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <div className='new-arrivals-item'>
                    <img src='https://via.placeholder.com/150' alt='new-arrivals' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <div className='new-arrivals-item'>
                    <img src='https://via.placeholder.com/150' alt='new-arrivals' />
                    <h3>Product Name</h3>
                    <p>Price: $10</p>
                </div>
                <p><a href="#">View All<FaArrowRight /></a></p>
            </div>
            </div>
        
        </div>
  )
}
