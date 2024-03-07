import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function SportsLeisure() {

  return (
    <Dropdown>
    <Dropdown.Toggle style={{ backgroundColor: 'teal', borderColor: 'Teal', color: 'black' }} id="dropdown-basic">
      Sports & Leisure
    </Dropdown.Toggle>
  
    <Dropdown.Menu style={{ backgroundColor: 'Teal' }}>
      <Dropdown.Item style={{ color: 'white' }} href="#/action-1">Equipments</Dropdown.Item>
      <Dropdown.Item style={{ color: 'white' }} href="#/action-2">Sports Wear</Dropdown.Item>
      <Dropdown.Item style={{ color: 'white' }} href="#/action-3">Utilities</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default SportsLeisure;