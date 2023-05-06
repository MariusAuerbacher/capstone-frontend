import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Cards.css";


const Cards = () => {
  const navigate = useNavigate();
  const onRohingyaHandler = () => {
    navigate("/beneficiaries");
    
  };
  return (
    <>
   <form id="cards" className="d-flex justify-content-end cards-form mt-5" >
<input type="text" name="name" placeholder="Search" />
<input type="submit" value="Search" />
</form>

<div className="d-flex justify-content-end button-urgent-appeals mt-2 cards-form">
<Button variant="danger" style={{ width: "16rem" }} className="mb-5">
  Urgent Appeals
</Button>
</div>

     
      <Container >
          <Row>
          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
              className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body  className="card-body-text">
                <Card.Title>Rohingya</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
              onClick={onRohingyaHandler}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
             className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Uighur</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Afghanistan</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Yemen</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Syria</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Somalia</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>India</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Palestine</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Mali</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Central African Republic</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Mozambique</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Sudan</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Burkina Faso</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Niger</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} className="card-body-colour">
              <Card.Img
                className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Iraq</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              className="mb-5 mt-1 card-buttons"
              style={{ width: "18rem" }}
            >
              Help now
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;