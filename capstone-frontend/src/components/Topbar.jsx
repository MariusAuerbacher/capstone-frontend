import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import "../css/Topbar.css"


const Topbar = () => {

  return (
    <>
     <div className="" >
      <Navbar bg="primary" variant="dark"  >
       
      <Nav className="justify-content-between mr-auto">
      <Navbar.Brand className="  ">Make a</Navbar.Brand>
      <NavDropdown title="One Time" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Brand className="">donation of</Navbar.Brand>
      <NavDropdown title="$ Amount" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Brand className="">to</Navbar.Brand>
      <NavDropdown title="Where Needed Most" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <Button variant="danger" className="px-4">
           Donate
          </Button>
          <span>100% Donation Policy</span>

     
        <Form inline className="d-flex top-form">
          <FormControl type="text" placeholder="Search" />
          <Button variant="outline-light" className="px-4">
            Search
          </Button>
        </Form>
      </Navbar>
      </div>
<div>
      <Navbar bg="light" variant="light" className="d-flex whole-brand">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="justify-content-between mr-auto">
          <Nav.Link href="#features">Appeals</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#pricing">Ramadan</Nav.Link>
          <Nav.Link href="#pricing">Get Involved</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
  
 
        <p> <a href="/login">Login </a> / <a href="/register"> Register</a>
        </p>
    
      </Navbar>
      
</div>
    </>
  );
};

export default Topbar;
