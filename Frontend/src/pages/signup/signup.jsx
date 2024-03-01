import {useRef, useState, useEffect} from 'react'
import {faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import {Form, Button, Card, Container} from 'react-bootstrap'
import React from 'react'
import './signup.css'



export const Signup = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  

  return (
    <>
    <Container className="h-100 d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
    <Card>
      <Card.Body>
      <h2 className="text-center mb-4">Campus<span style={{ color: 'red' }}>Price</span></h2>    
        
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required/>
          </Form.Group>
          <Button className="w-100" type="submit">Sign Up</Button>
        </Form>

      </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <a href='/login'>Log in</a>
      </div>
      </div>
      </Container>
      

    </>
  )
}

export default Signup
