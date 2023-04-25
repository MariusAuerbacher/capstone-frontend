import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Cards = () => {
  const navigate = useNavigate()
  const onRohingyaHandler = () => {
    navigate("/country/rohingya")
  }
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Rohingya</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Uighur</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Afghanistan</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Yemen</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Syria</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Somalia</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>India</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Palestine</Card.Title>
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
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Mali</Card.Title>
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

export default Cards;






