import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Supplies() {

  return (
    <Dropdown>
    <Dropdown.Toggle style={{ backgroundColor: 'teal', borderColor: 'teal', color: 'black' }} id="dropdown-basic">
      Supplies
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{ backgroundColor: 'teal' }}>
      <Dropdown.Item style={{ color: 'black' }} href="#/action-1">Notebooks</Dropdown.Item>
      <Dropdown.Item style={{ color: 'black' }} href="#/action-2">Pens</Dropdown.Item>
      <Dropdown.Item style={{ color: 'black' }} href="#/action-3">Sticky Pads</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default Supplies;