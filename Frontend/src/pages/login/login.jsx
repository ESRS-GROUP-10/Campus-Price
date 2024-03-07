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
          <Form.Group id="username">
            <Form.Label>Email</Form.Label>
            <Form.Control type="username" required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required/>
          </Form.Group>
          <Button className="w-100" type="submit" onClick={getDeets()}>Sign In</Button>
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

export function getDeets(){
  const username = document.getElementById("username");
  const inputValue = username.value;
  console.log(inputValue);

  const pword = document.getElementById("password");
  const pwordVal = pword.value;
  console.log(pwordVal);

  const postData = {
    username: inputValue, password: pwordVal
  }
  PostData2(postData);
}

//maybe JSON.PARSE(data) or JSON(data)
export function PostData2(data){
  return fetch('../backend/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (!response.ok) {
      console.log("bad staut code from server");
      throw new Error('Bad status code from server.');
    }
    else{
      console.log(response);
      //ifresponce.json.contains("OK"){
        //redirect do whatever.....
      //}
      //else{
        //not logged in error
      //}
    }
    return response.json();
  })
  .then(function(responseData) {
    if (!(responseData.data && responseData.data.success)) {
      console.log("bad responce from server!");
      throw new Error('Bad response from server.');
    }
    else {
      console.log("respnce data is _____");
      console.log(responseData.data);
    }
  });
}

