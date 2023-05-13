import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Beneficiaries.css";
import axios from "axios";

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [filteredBeneficiaries, setFilteredBeneficiaries] = useState([])
  const [searchText, setSearchText] =useState("")
  //const [institutions, setInstitutions] = useState([]);
  const navigate = useNavigate();
  /*const onRohingyaHandler = () => {
    navigate("/country/rohingya");
  };*/
  const getAllBeneficiaries = async () => {
    const res = await axios.get("/beneficiaries/");
    console.log(res.data);
    setBeneficiaries(res.data);
    setFilteredBeneficiaries(res.data)
  };

  const searchHandler = (e) => {
    e.preventDefault()
   const result =  beneficiaries.filter((beneficiary)=>{
      if(beneficiary.category.toLowerCase().includes(searchText.toLowerCase())) return true
    })
    setFilteredBeneficiaries(result)
  }

  const getUrgentBeneficiaries = (e) => {
    const result =  beneficiaries.filter((beneficiary)=>{
      if(beneficiary.category.toLowerCase().includes("urgent")) return true
    })
    setFilteredBeneficiaries(result)
  }
  /*const getAllInstitutions = async () => {
    const res = await axios.get("/institutions/");
    console.log(res.data);
    setInstitutions(res.data);
  };*/

  useEffect(() => {
    getAllBeneficiaries();
    //getAllInstitutions()
  }, []);

  return (
    <>
      <form  className="d-flex justify-content-end cards-form mt-5" onSubmit={searchHandler}>
        <input type="text" name="name" placeholder="Search by Category" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button type="submit" className="card-search-button">Search</button>
      </form>

      <div className="d-flex justify-content-end button-urgent-appeals mt-2 mb-3 cards-form">
        <Button variant="danger" style={{ width: "16rem" }} onClick={getUrgentBeneficiaries}>
          Urgent Appeals
        </Button>
      </div>

      <Container >
        <Row>
          {filteredBeneficiaries.map((beneficiary) => {
            return (
              <Col xs={12} md={2} key={beneficiary._id} className="mx-5" id="beneficiaries">
                <Card className="card-body-height">
                  <Card.Img
                    className="card-image image-fluid"
                    variant="top"
                    src={beneficiary.image}
                  />
                  <Card.Body className="card-body-text">
                    <Card.Title>{beneficiary.name}</Card.Title>
                    <br />
                    <Card.Subtitle><span className="text-muted">Category:</span> {beneficiary.category}</Card.Subtitle>
                    <br />
                    <Card.Text>
                      <h6>{beneficiary.description}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6><span className="text-muted">Institution Name:</span> {beneficiary.institution.name}</h6>
                    </Card.Text>
                    <Card.Text>
                      <p><span className="text-muted">Email: </span> {beneficiary.email}</p>
                    </Card.Text>
                    <Card.Text>
                      <p><span className="text-muted">Phone Number: </span>{beneficiary.number}</p>
                    </Card.Text>
                    <Card.Text>
                      <p><span className="text-muted">Location: </span>{beneficiary.address}</p>
                    </Card.Text>
                    <Card.Text>
                      <p>{beneficiary.paymentOptions}</p>
                    </Card.Text>

                    {/*{institutions.map((institution) => {
                      return ( 

                        <Card.Text>Institution description:{institution.description}</Card.Text>
                      )
                    })},*/}
                  </Card.Body>
                </Card>
                <Button
                  className="mt-3 mb-3 beneficiary-card-buttons"
                  onClick={() => {
                    navigate(
                      `/payment?institution=${beneficiary.institution._id}&beneficiary=${beneficiary._id}`
                    );
                  }}
                >
                  Donate Now
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default Beneficiaries;
