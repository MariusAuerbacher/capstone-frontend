import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "../css/Vision.css"

const Vision = () => {
  return (
    <>
      <Container id="vision" className="my-5">
        <Row>
          <Col xs={12} md={12}>
          <hr/>
          <h1 className="mb-4">Ummati</h1>
    <p className="vision-paragraph">The goal of Ummati is to help the most vulnerable and needy as <strong>directly </strong> and as <strong>efficiently</strong> as possible. We do this by giving you the opportunity to directly donate the money to those in need, who know best how to use the money as efficiently as possible in their area, removing administrative costs and making sure your donation is beneficial and actually reaches the intended person. We have a <strong>100% donation</strong>  policy. <br/>
      It is possible to donate once, regularly, sponsor an orphan or a student of knowledge, support a widow, help in medical emergencies or when a natural catastrophe occured.
      You can also support a community with an Agricultural project or start a Business Partnership or build a Well.<br/>
      Ideally you can encourage others in your community to join so that it develops into a <strong>partnership</strong> between two communities. <br/>
      With <strong>Ummati</strong> there are no more excuses not to start helping others <strong>today</strong>.
    </p>
    <hr/>
          </Col>
        </Row>
      </Container>
     
  
    </>
  );
};

export default Vision;
