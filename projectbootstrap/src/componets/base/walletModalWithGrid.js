import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import ModalItems from "./modalItems";
import dai from "../../Image/Accountoverview/DAI-icon.png";
import rdai from "../../Image/Accountoverview/rDAI-icon.png";
import eth from "../../Image/Accountoverview/ETH-icon.png";
import lend from "../../Image/Accountoverview/LEND-icon.png";
import snx from "../../Image/Accountoverview/SNX-icon.png";
import sdefi from "../../Image/Accountoverview/sDEFI-icon.svg";
import Styles from "./WalletModalWithGridStyle.module.css";

function WalletModalWithGrid(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row  className={Styles.modalItemsTitleBox}>
            <Col md={3}>Asset</Col>
            <Col md={3}>Balance</Col>
            <Col md={3}>Price</Col>
            <Col md={3}>Value</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={eth}
              imagename={"ETH"}
              name={"ETH"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={lend}
              imagename={"LEND"}
              name={"LEND"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={snx}
              imagename={"SNX"}
              name={"SNX"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={dai}
              imagename={"DAI"}
              name={"DAI"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={sdefi}
              imagename={"sDEFI"}
              name={"sDEFI"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={rdai}
              imagename={"rDAI"}
              name={"rDAI"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
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
