import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Cards.css";
import axios from "axios";
const countries = [{
  id: 1,
  name: "Rohingya",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BFcopM-38s70GCW8XF2rovZjJyuFnW0mqg&usqp=CAU",
  text: "One of the most persecuted minorities in the world. The Rohingya are stateless and facing a genocide in Myanmar."

}, {
  id: 2,
  name: "Uyghurs",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHuYXaIT_L0jWjK8vGvgCPVMh0uJSd5-mOA&usqp=CAU",
  text: "The Uyghurs of East Turkistan face a genocide in China. Support those who managed to escaped the country."
}, {
  id: 3,
  name: "Afghanistan",
  image:"https://images.unsplash.com/photo-1602048532658-14af055db84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWZnaGFuaXN0YW58ZW58MHx8MHx8&au=format&fit=crop&w=800&q=60",
  text: "After consecutive foreign invasions and sanctions. Afghans suffer from accute economic hardship."
}, {
  id: 4,
  name:"Yemen",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdd9zR1MmLdTe8fhFoSV_ApX6d5HlJv3gRmg&usqp=CA", 
  text: "Due to a prolonged civil war, sanctions and draught Yemen is facing famine and cholera."
}, {
  id: 5,
  name:"Syria",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS572zPhoLmpKi9m-BiYsxjXsYwX_IZ60gP0A&usqp=CAU",
    text:  "12 years of ongoing civil war and a recent earthquake. Help those internally displaced in Idlib."
}, {
  id: 6,
  name: "Somalia",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYlt8D4qEpEYDIEF-E4HvlH5Z7YLV3qoI9w&usqp=CAU",
  text: "Consecutive droughts and a civil war. Somalia is on the brink of famine."
}, {
id: 7,
  name: "Pakistan",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8UfFH64khvpFHdqBG1caAUYSiN4BhM6Hlg&usqp=CAU",
  text:  "Help those affected by floods, earthquakes and an economic crises in Pakistan."
}, {
id: 8,
  name: "Palestine",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmB3vnnUnnNHgI6hvafpdmfTEw5_u5laoHVQ&usqp=CAU",
  text: "Economic hardship and sanctions in an Apartheid State. Palestinians need your support."
}, {
id: 9,
  name: "Mali",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2YS4fLeZ86TfZamfSVNbn8FBjGvqeyanAg&usqp=CAU",
  text: "Help those internally displaced by fighting in Northern and Central Mali."
}, {
id: 10,
  name: "Central African Republic",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRm0rN4WdCyXNbVxwyeEODPTemzr9V_hdOQ&usqp=CAU",
  text: "Another forgotten civil war. Help those internally displaced by fighting."
},{
id: 10,
name: "Mozambique",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirbe2OsfXN2zpSXBTUDFk4wyAalaZCNyPUw&usqp=CAU",
text: "Help those internally displaced by fighting in the North of Mozambique."
},{
id: 10,
name: "Sudan",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzI_w8tEBg6lsmZzE6vtlQFSUF-pG0DrB0zA&usqp=CAU",
text: "Political unrest and fighting between rival factions have displaced thousands in Sudan."
}]


const Cards = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState(countries)
 
  const [searchText, setSearchText] =useState("")
  const navigate = useNavigate();
  const onRohingyaHandler = () => {
    navigate("/beneficiaries");
    
  };
  const getAllBeneficiaries = async () => {
    const res = await axios.get("/beneficiaries/");
    setBeneficiaries(res.data);
    setFilteredBeneficiaries(res.data)
    console.log(beneficiaries)
    console.log(filteredBeneficiaries)
  };
  const searchHandler = (e) => {
    e.preventDefault()
   // eslint-disable-next-line array-callback-return
   const result =  countries.filter((country)=>{
      if(country.name.toLowerCase().includes(searchText)) return true
    })
    setFilteredCountries(result)
  }

  /*const getUrgentBeneficiaries = (e) => {
    const result =  filteredBeneficiaries.filter((beneficiary)=>{
      if(beneficiary.category.toLowerCase().includes("urgent")) return true
    })
    setFilteredBeneficiaries(result)
  }*/

  useEffect(() => {
    getAllBeneficiaries();
    //getAllInstitutions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  

 
  return (
    <>








   <form id="cards" className="d-flex justify-content-end cards-form mb-5" onSubmit={searchHandler} >
<input type="text" name="name" placeholder="Search by Country" value={searchText} onChange={(e)=>{setSearchText(e.target.value.toLowerCase())}}/>
<input type="submit" value="Search" className="card-search-button"/>
</form>


     
      <Container className="container-fluid">
          <Row>
            {filteredCountries.map((country)=>{
              return (
                <Col xs={12} md={4}>
            <Card style={{ width: "18rem"}} className="card-body-colour">
              <Card.Img
              className="card-images image-fluid"
                variant="top"
                src={country.image}
              />
              <Card.Body  className="card-body-text">
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>
                 {country.text}
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              className="mb-5 mt-3 card-buttons"
              style={{ width: "18rem", height: "2rem" }}
              onClick={onRohingyaHandler}
            >
              Help now
            </Button>
          </Col>
              )
            })}
          
        


  

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