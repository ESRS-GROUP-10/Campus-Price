import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

function SportsLeisure() {

  const [isOpen, setIsOpen] = useState(false);

  // toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-box">
      {/* Button to toggle the dropdown */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      <a href="#">SportsLeisure<FaCaretDown /></a>
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Equipment</li>
            <li>Gym</li>
            <li>Hobbies</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SportsLeisure;