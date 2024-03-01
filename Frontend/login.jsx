import {useRef, useState, useEffect} from 'react'
import {faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import './login.css'



export const Login = () => {

  return (
    
    <Container className="d-flex align-items-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Campus<span style={{ color: 'red' }}>Price</span></h2>
        
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required/>
          </Form.Group>
          <Button className="w-100" type="submit">Sign In</Button>
        </Form>

      </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Do not have an account? <a href='/'>Sign Up</a>
      </div>
      </div>
      </Container>
  )
}

export default Login
