import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { PostData } from '../../service/PostData';
import './login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  function callPostData(data) {
    console.log(data);
    const postData = { email, password };
    PostData('login', postData).then((result) => {
      let responseJson = result;
      console.log("we are posting OK");
      if (responseJson.userData) {
        console.log("we are RECIEVEING OK");
        console.log(result);
        sessionStorage.setItem('userData', JSON.stringify(responseJson));
        setRedirectToReferrer(true);
      }
    });
  }

  return (
    <Container className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Campus<span style={{ color: 'red' }}>Price</span></h2>
            <Form>
              <Form.Group id="username">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <Button className="w-100" type="button" onClick={() => callPostData("test")}>Sign In</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Do not have an account? <a href='/'>Sign Up</a>
        </div>
      </div>
    </Container>
  );
};

export default Login;




