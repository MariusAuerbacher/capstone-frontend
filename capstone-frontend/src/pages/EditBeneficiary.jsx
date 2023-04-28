import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";



const EditBeneficiary = ({ handleClose, edit, experience }) => {
  const [beneficiary, setBeneficiary] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
    number: "",
    address: "",
    paymentOptions: "",
    image: "test",
    password: "",
  });
  const [image, setImage] = useState(null);

const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    const beneficiaryCopy = {...beneficiary}
    beneficiaryCopy.number = +beneficiaryCopy.number
    beneficiaryCopy.paymentOptions = beneficiaryCopy.paymentOptions.split(",")
    console.log(beneficiaryCopy)
  };
  /*const addImageHandler = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };*/

  return (
    <>
    <Container>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="notify-section"></div>
        <div className="form">
          <p>* Indicates required</p>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 text-muted" controlId="title">
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

            <Form.Group className="mb-3 text-muted" controlId="email-name">
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


            <Form.Group className="mb-3 text-muted" controlId="category-name">
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

            <Form.Group className="mb-3 text-muted" controlId="description-name">
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

            
            <Form.Group className="mb-3 text-muted" controlId="phone-number">
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

            <Form.Group className="mb-3 text-muted" controlId="location">
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

            <Form.Group className="mb-3 text-muted" controlId="payment">
              <Form.Label>Payment options</Form.Label>
              <Form.Control
                value={beneficiary.paymentOptions}
                type="text"
                placeholder="Select all possible ways you can receive money"
                onChange={(e) =>
                  setBeneficiary({
                    ...beneficiary,
                    paymentOptions: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                value={beneficiary.image}
                type="text"
                placeholder="Image of Beneficiary"
                onChange={(e) =>
                  setBeneficiary({
                    ...beneficiary,
                  image: e.target.value,
                  })
                }
              />
                      <Button
              variant="primary"
              type="button"
              onClick={(e) => {
                /*e.preventDefault();
                handleClose()
                const formData = new FormData();
                formData.append("image", image);
                dispatch(
                 //postImageExperienceAsync(formData, beneficiary, beneficiary._id)
                );*/
              }}
            >
              Edit picture
            </Button>
            </Form.Group>

            <Form.Group className="mb-3 text-muted" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={beneficiary.password}
                type="text"
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
            >
              Edit
            </Button>
          </Form>
        </div>
      </Modal.Body>
 
      </Container>
    </>
  );
};

export default EditBeneficiary;
