import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function All() {
 

  return (
    <Dropdown className='drop-down'>
    <Dropdown.Toggle style={{ backgroundColor: 'teal', borderColor: 'Teal', color: 'black' }} id="dropdown-basic">
      All
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{ backgroundColor: 'Teal', hover: 'black'}}>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-1">Category 1</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-2">Category 2</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-3">Category 3</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-3">Category 4</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-3">Category 5</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-3">Category 6</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-3">Category 7</Dropdown.Item>
      <Dropdown.Item className="dropdown-item" style={{ color: 'black' }} href="#/action-3">Category 8</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default All;