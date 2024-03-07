import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import Adduser from '../adduser/adduser';

const Admin = () => {

  return (
    <Container className="h-100 d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
          <h2 className="text-center mb-4">Admin</h2>
     <Adduser />
    </Container>
  )
}

export default Admin;