import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

function Supplies() {
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
      <a href="#">Supplies<FaCaretDown /></a>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Pens & Pencils</li>
            <li>Notepads</li>
            <li>Sticky Pads</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Supplies;