import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal} from "react-bootstrap";
//import { useDispatch } from "react-redux";
import "../css/EditBeneficiaries.css";
import LocationPicker from "../components/LocationPicker";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const paymentOptionsArray = [
  "Visa/Credit Card",
  "Cryptocurrency",
  "Hawala Banking",
  "Mobile Money",
  "Remitly/Dahabshil/Western Union/Money Transfer",
  "Cash",
];

const AddBeneficiary = () => {
  const navigate = useNavigate()
  const role = useSelector((state)=>state.userReducer.role)
  const [file, setFile] = useState(null)
  const [beneficiary, setBeneficiary] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
    number: "",
    address: "",
    paymentOptions: [],
    image: "",
    password: "",
    location: {
      type: "Point",
      coordinates: []
    }
  });
  //const [image, setImage] = useState(null);

  //const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", file)
    form.append("upload_preset", "ummati")
    const cloudinaryRes = await axios.post("https://api.cloudinary.com/v1_1/dj7y6okm8/upload", form)
    console.log(cloudinaryRes.data)
    const beneficiaryCopy = { ...beneficiary };
    beneficiaryCopy.number = +beneficiaryCopy.number;
    beneficiaryCopy.image = cloudinaryRes.data.secure_url
    //beneficiaryCopy.paymentOptions = beneficiaryCopy.paymentOptions.split(",");
    console.log(beneficiaryCopy);
    const res = await axios.post("/beneficiaries/register", beneficiaryCopy, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(res.data);
  };


  useEffect(()=>{
    if(role !== "INSTITUTION"){
      navigate("/ilogin", {replace: true})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])
  /*const addImageHandler = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };*/

  return (
    <>
      <Container className="d-flex justify-content-center my-5 edit-beneficiary-container">
        <Col xs={12} md={6}>
          <h2 className="mb-4">Add</h2>
          <Modal.Body>
            <div className="notify-section"></div>
            <div className="form">
              <p className="mb-4">* indicates required</p>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-4" controlId="title">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    value={beneficiary.name}
                    type="text"
                    placeholder="Beneficiary Full name"
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="email-name">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    value={beneficiary.email}
                    type="text"
                    placeholder="Beneficiary Email (if N/A: your email)"
                    required
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="category-name">
                  <Form.Label>Category*</Form.Label>
                  <Form.Control
                    value={beneficiary.category}
                    type="text"
                    placeholder="Beneficiary Category (e.g. Orphan, Medical, Emergency etc.)"
                    required
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        category: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="description-name">
                  <Form.Label>Description*</Form.Label>
                  <Form.Control
                    value={beneficiary.description}
                    type="text"
                    placeholder="Beneficiary Description"
                    required
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="phone-number">
                  <Form.Label>Phone Number*</Form.Label>
                  <Form.Control
                    value={beneficiary.number}
                    type="number"
                    placeholder="Beneficiary Phone Number"
                    required
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        number: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="location">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={beneficiary.address}
                    type="text"
                    placeholder="Address"
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        address: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Label className="mb-3">
                  Ways of Receiving Funds
                </Form.Label>
                <Form.Group controlId="formBasicCheckbox mb-3">
                  {paymentOptionsArray.map((option) => {
                    return (
                      <Form.Check
                        className="mb-3"
                        type="checkbox"
                        label={option}
                        onChange={(e) => {
                          let paymentOptions = [...beneficiary.paymentOptions]
                          if(e.target.checked === true) {
                            paymentOptions.push(option)
                          } else {
                            paymentOptions = paymentOptions.filter((op)=> op !== option)
                          }
                          setBeneficiary({
                            ...beneficiary,
                            paymentOptions,
                          });
                        }}
                      />
                    );
                  })}
                </Form.Group>

                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    id="image"
                    className="mb-4"
                    //value={beneficiary.image}
                    type="file"
                    hidden
                    //placeholder="Image of Beneficiary"
                    onChange={(e) =>{
                      setFile(e.target.files[0])
                    }
                      
                    }
                  />
                  <label
                    className="btn btn-primary btn-block btn-xl login-button mb-4"
                    variant="primary"
                    type="button"
                   htmlFor="image"
                  >
                    Add picture
                  </label>
                </Form.Group>


                 {/*<Form.Group className="mb-4" controlId="email-name">
                  <Form.Label>Latitude</Form.Label>
                  <Form.Control
                    value={beneficiary.location.coordinates[1]}
                    type="text"
                    placeholder="Beneficiary Email (if N/A: your email)"
                    required
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                       location: {
                        ...beneficiary.location,
                        coordinates: [beneficiary.location.coordinates[0], e.target.value]
                       }
                      })
                    }
                  />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="email-name">
                  <Form.Label>Longitude</Form.Label>
                  <Form.Control
                    value={beneficiary.location.coordinates[0]}
                    type="text"
                    placeholder="Longitude"
                    required
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        location: {
                          ...beneficiary.location,
                          coordinates: [e.target.value, beneficiary.location.coordinates[1]]
                         }
                      })
                    }
                  />
                  </Form.Group>*/}


                  <LocationPicker beneficiary={beneficiary} setBeneficiary={setBeneficiary}/>

                <Form.Group className="mb-5" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={beneficiary.password}
                    type="password"
                    placeholder="Beneficiary Login Password"
                    onChange={(e) =>
                      setBeneficiary({
                        ...beneficiary,
                        password: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary btn-block btn-xl login-button mb-4 px-5"
                >
                  Add
                </Button>
              </Form>
            </div>
          </Modal.Body>
        </Col>
      </Container>
      <hr />
    </>
  );
};

export default AddBeneficiary;
