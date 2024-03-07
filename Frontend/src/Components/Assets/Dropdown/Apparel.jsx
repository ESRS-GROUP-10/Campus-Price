import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import './CustomDropdown.css';

function Apparel() {
 

  return (
    <Dropdown className='drop-down'>
    <Dropdown.Toggle style={{ backgroundColor: 'teal', borderColor: 'Teal', color: 'black' }} id="dropdown-basic">
      Apparel
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{ backgroundColor: 'Teal', hover: 'black'}}>
      <Dropdown.Item className="dropdown-item" style={{ color: 'white' }} href="#/action-1">Shirts</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'white' }} href="#/action-2">Shoes</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'white' }} href="#/action-3">Pants</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default Apparel;

//Apparel Sports & Leisure Food Kitchen Electronics 