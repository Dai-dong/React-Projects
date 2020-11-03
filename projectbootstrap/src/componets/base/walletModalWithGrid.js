import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

function WalletModalWithGrid(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={3}>Asset</Col>
            <Col md={3}>Balance</Col>
            <Col md={3}>Price</Col>
            <Col md={3}>Value</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WalletModalWithGrid;
