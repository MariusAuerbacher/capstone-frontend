import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "../css/Cards.css"


const Beneficiaries = () => {
  const navigate = useNavigate()
  const onRohingyaHandler = () => {
   
    navigate("/country/rohingya")
  }
  return (
    <>
  <form className="d-flex justify-content-end">
    <input type="text" name="name"  placeholder="Search"  />
  <input type="submit" value="Search"/>
</form>

<div className="d-flex justify-content-end button-urgent-appeals mt-2">
<Button variant="danger" style={{ width: '16rem' }}>Urgent Appeals</Button>

</div>

      <Container id="cards">
        <Row>
          <Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3 mb-3" style={{ width: '18rem' }} onClick={onRohingyaHandler}>Go somewhere</Button>
</Col>



          <Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 2</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>

<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>


<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 3</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>


<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 4</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }}>Go somewhere</Button>
</Col>



          <Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 5</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>

<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 6</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>


<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 7</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>

<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title>Person 8</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3" style={{ width: '18rem' }} >Go somewhere</Button>
</Col>
        </Row>
      </Container>
    </>
  );
};

export default Beneficiaries;