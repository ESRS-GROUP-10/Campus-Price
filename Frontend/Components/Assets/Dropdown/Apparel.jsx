import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

function Apparel() {
  // State to manage whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Button to toggle the dropdown */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      <a href="#">Apparel<FaCaretDown /></a>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Shirts</li>
            <li>Shoes</li>
            <li>Pants</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Apparel;

//Apparel Sports & Leisure Food Kitchen Electronics 