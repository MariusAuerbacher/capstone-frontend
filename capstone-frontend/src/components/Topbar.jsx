import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import "../css/Topbar.css"

const Topbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark"  >
      <Nav className="d-flex brand-top" >
      <Navbar.Brand>Make a</Navbar.Brand>
      <NavDropdown title="One Time" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Brand>donation of</Navbar.Brand>
      <NavDropdown title="$ Amount" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Brand className="brand-top">to</Navbar.Brand>
      <NavDropdown title="Where Needed Most" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        <Form inline className="d-flex top-form">
          <FormControl type="text" placeholder="Search" />
          <Button variant="outline-light" className="px-4">
            Search
          </Button>
          <Button variant="danger" className="px-4">
           Donate
          </Button>
        </Form>
      </Navbar>


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
        <Form inline className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Topbar;
