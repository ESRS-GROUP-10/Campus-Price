import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

function Kitchen() {
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
      <a href="#">Kitchen<FaCaretDown /></a>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Pots & Pans</li>
            <li>Knives</li>
            <li>Paper Towels</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Kitchen;