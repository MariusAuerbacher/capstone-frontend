import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Cards.css";
import axios from "axios";


const Cards = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([])
  const [searchText, setSearchText] =useState("")
  const navigate = useNavigate();
  const onRohingyaHandler = () => {
    navigate("/beneficiaries");
    
  };
  const getAllBeneficiaries = async () => {
    const res = await axios.get("/beneficiaries/");
    console.log(res.data);
    setBeneficiaries(res.data);
    setFilteredBeneficiaries(res.data)
  };
  const searchHandler = (e) => {
    e.preventDefault()
   const result =  beneficiaries.filter((country)=>{
      if(country.country.toLowerCase().includes(searchText.toLowerCase())) return true
    })
    setFilteredBeneficiaries(result)
  }

  const getUrgentBeneficiaries = (e) => {
    const result =  beneficiaries.filter((beneficiary)=>{
      if(beneficiary.category.toLowerCase().includes("urgent")) return true
    })
    setFilteredBeneficiaries(result)
  }

  useEffect(() => {
    getAllBeneficiaries();
    //getAllInstitutions()
  }, []);



  

  /*const searchCountriesArray = [{
    id: 1,
    country: "Rohingya"
}, {
    id: 2,
    country: "Uyghurs"
}, {
    id: 3,
    country: "Afghanistan"
}, {
    id: 4,
    country:"Yemen"
}, {
    id: 5,
    country:"Syria"
}, {
    id: 6,
    country: "Somalia"
}, {
  id: 7,
    country: "India"
}, {
  id: 8,
    country: "Palestine"
}, {
  id: 9,
    country: "Mali"
}, {
  id: 10,
    country: "Central African Republic"
},{
  id: 10,
  country: "Mozambique"
},{
  id: 10,
  country: "Sudan"
}] */

  return (
    <>
   <form id="cards" className="d-flex justify-content-end cards-form mt-5" onSubmit={searchHandler} >
<input type="text" name="name" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value.toLowerCase())}}/>
<input type="submit" value="Search" />
</form>

<div className="d-flex justify-content-end button-urgent-appeals mt-2 cards-form">
<Button variant="danger" style={{ width: "16rem" }} className="mb-5"  onClick={getUrgentBeneficiaries}>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BFcopM-38s70GCW8XF2rovZjJyuFnW0mqg&usqp=CAU"
              />
              <Card.Body  className="card-body-text">
                <Card.Title>Rohingya</Card.Title>
                <Card.Text>
                  One of the most persecuted minorities in the world. The Rohingya are stateless and facing a genocide in Myanmar.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHuYXaIT_L0jWjK8vGvgCPVMh0uJSd5-mOA&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Uyghur</Card.Title>
                <Card.Text>
                  The Uyghurs of East Turkistan face a genocide in China. Support those who managed to escaped the country.
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
              style={{ height: "11.8rem" }}
               className="card-images"
                variant="top"
                src="https://images.unsplash.com/photo-1602048532658-14af055db84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWZnaGFuaXN0YW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Afghanistan</Card.Title>
                <Card.Text>
                  After consecutive foreign invasions and sanctions. Afghans suffer from accute economic hardship.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdd9zR1MmLdTe8fhFoSV_ApX6d5HlJv3gRmg&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Yemen</Card.Title>
                <Card.Text>
                Due to a prolonged civil war, sanctions and draught Yemen is facing famine and cholera.
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
            <Card style={{ width: "18rem"}} className="card-body-colour">
              <Card.Img
              style={{ height: "11.9rem" }}
               className="card-images"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS572zPhoLmpKi9m-BiYsxjXsYwX_IZ60gP0A&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Syria</Card.Title>
                <Card.Text>
                12 years of ongoing civil war.<br/> Help those internally displaced in Idlib.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYlt8D4qEpEYDIEF-E4HvlH5Z7YLV3qoI9w&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Somalia</Card.Title>
                <Card.Text>
                  Consecutive droughts and a civil war. Somalia is on the brink of famine.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8UfFH64khvpFHdqBG1caAUYSiN4BhM6Hlg&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>India</Card.Title>
                <Card.Text>
                 Help those persecuted and internally displaced in Kashmir and now all over India.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmB3vnnUnnNHgI6hvafpdmfTEw5_u5laoHVQ&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Palestine</Card.Title>
                <Card.Text>
                  Economic hardship and sanctions in an Apartheid State. Palestinians need your support.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2YS4fLeZ86TfZamfSVNbn8FBjGvqeyanAg&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Mali</Card.Title>
                <Card.Text>
                  Help those internally displaced by fighting in Northern and Central Mali.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRm0rN4WdCyXNbVxwyeEODPTemzr9V_hdOQ&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Central African Republic</Card.Title>
                <Card.Text>
                  Another forgotten civil war. Help those internally displaced by fighting.
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
               style={{ height: "14.6rem" }} 
                className="card-images moz-image"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirbe2OsfXN2zpSXBTUDFk4wyAalaZCNyPUw&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Mozambique</Card.Title>
                <Card.Text>
                  Help those internally displaced by fighting in the North of Mozambique.
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
              style={{ height: "14.5rem" }} 
                className="card-images"
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzI_w8tEBg6lsmZzE6vtlQFSUF-pG0DrB0zA&usqp=CAU"
              />
              <Card.Body className="card-body-text">
                <Card.Title>Sudan</Card.Title>
                <Card.Text>
                  Political unrest and fighting between rival factions have displaced thousands in Sudan.
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

          {/*<Col xs={12} md={4}>
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
  </Col>*/}
        </Row>
      </Container>
    </>
  );
};

export default Cards;