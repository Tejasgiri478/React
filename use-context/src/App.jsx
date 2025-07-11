import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Row className="justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Img
              variant="top"
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              className="rounded-circle mx-auto mt-3"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default App;
