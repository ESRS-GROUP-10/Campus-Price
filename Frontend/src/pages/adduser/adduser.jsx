import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'



export const Adduser = () => {

  return (
    
    <Container className="h-100 d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Add User</h2>
        
        <Form>
          <Form.Group id="Fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="Fullname" required/>
          </Form.Group>
          <Form.Group id="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="Username" required/>
          </Form.Group>
          <Button className="w-100" type="submit">Create</Button>
        </Form>

      </Card.Body>
      </Card>
      </div>
      </Container>
  )
}

export default Adduser