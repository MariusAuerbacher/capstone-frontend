import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Country = () => {
  const navigate = useNavigate()
  const onPersonHandler = () => {
   
    navigate("/beneficiaries")
  }
  return (
    <>
      <Container id="country">
        <Row>
          <Col xs={12} md={12}>
          <h1>Rohingya:</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus quod similique rem dignissimos, cum tempore. At fuga eius mollitia? Sit veniam voluptatum commodi sapiente ullam magnam mollitia quisquam! Quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus quod similique rem dignissimos, cum tempore. At fuga eius mollitia? Sit veniam voluptatum commodi sapiente ullam magnam mollitia quisquam! Quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus quod similique rem dignissimos, cum tempore. At fuga eius mollitia? Sit veniam voluptatum commodi sapiente ullam magnam mollitia quisquam! Quasi?</p>
          </Col>


     
          <Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Kutupalong Center Jame Mosque</Card.Title>
    <Card.Text>
    Kutupalong, Cox's Bazar, Bangladesh
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3 mb-3" style={{ width: '18rem' }} onClick={onPersonHandler} >Go somewhere</Button>
</Col>

     
<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Masjid e Arakani</Card.Title>
    <Card.Text>
    Kutupalong, Cox's Bazar, Bangladesh
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3 mb-3" style={{ width: '18rem' }}  onClick={onPersonHandler} >Go somewhere</Button>
</Col>


     
<Col xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>Baiturrahman Grand Mosque</Card.Title>
    <Card.Text>
      Aceh Indonesia
    </Card.Text>
 
  </Card.Body>

</Card>
<Button variant="primary" className="mt-3 mb-3" style={{ width: '18rem' }}  onClick={onPersonHandler} >Go somewhere</Button>
</Col>

        </Row>
      </Container>
   
    </>
  );
};

export default Country;