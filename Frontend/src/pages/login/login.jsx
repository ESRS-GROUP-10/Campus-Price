import {useRef, useState, useEffect} from 'react'
import {faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import './login.css'



export const Login = () => {

  return (
    
    <Container className="h-100 d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
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
          <Button className="w-100" type="submit" onClick={callPostData("test")}>Sign In</Button>
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

function callPostData(data){
  console.log(data)
  PostData('login',this.state).then((result) => {
    let responseJson = result;
    console.log("we are posting OK");
    if(responseJson.userData){
      console.log("we are RECIEVEING OK");
      console.log(result);
      sessionStorage.setItem('userData',JSON.stringify(responseJson));
      this.setState({redirectToReferrer: true});
    }
    });
  

}
export function PostData(type, userData) {
  fetch('/backend/login.php')
  .then(response => response.json())
  .then(data => {
    // Handle the data received from the PHP script
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error('Error fetching data:', error);
  });
 }
