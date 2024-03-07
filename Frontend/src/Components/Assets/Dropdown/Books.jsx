import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

function Books() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Button to toggle the dropdown */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      <a href="#">Books<FaCaretDown /></a>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Physics</li>
            <li>Computer Science</li>
            <li>English</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Books;