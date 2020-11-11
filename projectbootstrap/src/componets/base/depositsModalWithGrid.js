import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import ModalItems from "./modalItems";
import adai from "../../Image/Accountoverview/aDAI-icon.svg";
import usdcin from "../../Image/Accountoverview/USDC-icon.png";
import ethin from "../../Image/Accountoverview/ETHindYdX-icon.png";
import daiin from "../../Image/Accountoverview/DAIincompound-icon.svg";
import staked from "../../Image/Accountoverview/StakedSNX-icon.png";
import Styles from "./WalletModalWithGridStyle.module.css";

function DepositsModalWithGrid(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Deopsits</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row  className={Styles.modalItemsTitleBox}>
            <Col md={3}>Asset</Col>
            <Col md={3}>Balance</Col>
            <Col md={3}>APY</Col>
            <Col md={3}>Value</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={ethin}
              imagename={"ETH in dYdX"}
              name={"ETH in dYdX"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>%</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={usdcin}
              imagename={"USDE in Compound"}
              name={"USDC in Compound"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>%</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={adai}
              imagename={"aDAI"}
              name={"aDAI"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>%</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={daiin}
              imagename={"DAI in Compound"}
              name={"DAI in Compound"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>%</Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>$</Col>
          </Row>
          <Row>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>
            <ModalItems
              address={staked}
              imagename={"Staked SNX"}
              name={"Staked SNX"}
            ></ModalItems>
          </Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}></Col>
          <Col md={3} className={Styles.accountOverviewModalItemsBox}>%</Col>
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

export default DepositsModalWithGrid;