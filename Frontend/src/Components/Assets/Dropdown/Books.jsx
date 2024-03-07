import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

function Books() {

  return (
    <Dropdown>
  <Dropdown.Toggle style={{ backgroundColor: 'teal', borderColor: 'Teal', color: 'black' }} id="dropdown-basic">
    Books
  </Dropdown.Toggle>

  <Dropdown.Menu style={{ backgroundColor: 'Teal' }}>
    <Dropdown.Item style={{ color: 'white' }} href="#/action-1">Physics</Dropdown.Item>
    <Dropdown.Item style={{ color: 'white' }} href="#/action-2">Computer Science</Dropdown.Item>
    <Dropdown.Item style={{ color: 'white' }} href="#/action-3">Fiction</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  );
}

export default Books;