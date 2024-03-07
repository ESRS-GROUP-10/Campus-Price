import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Kitchen() {


  return (
    <Dropdown>
    <Dropdown.Toggle style={{ backgroundColor: 'teal', borderColor: 'Teal', color: 'black' }} id="dropdown-basic">
      Kitchen
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{ backgroundColor: 'Teal' }}>
      <Dropdown.Item style={{ color: 'white' }} href="#/action-1">Pots/Pans</Dropdown.Item>
      <Dropdown.Item style={{ color: 'white' }} href="#/action-2">Containers</Dropdown.Item>
      <Dropdown.Item style={{ color: 'white' }} href="#/action-3">Cutlery</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default Kitchen;