import React, { useState } from "react";
import DashboardBodyItems from "./dbitems.js";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./AccountOverviewItemStyle.module.css";
import WalletModalWithGrid from './walletModalWithGrid';
import DepositsModalWithGrid from './depositsModalWithGrid';

function AccountOverviewItem(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
            <DashboardBodyItems
              name={"Wallet"}
              price={"$"}
              handleClick={() => setModalShow(true)}
            ></DashboardBodyItems>
          </Col>
          <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
            <DashboardBodyItems
              name={"Deposits"}
              price={"$"}
            ></DashboardBodyItems>
          </Col>
          <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
            <DashboardBodyItems
              name={"Investments"}
              price={"$"}
            ></DashboardBodyItems>
          </Col>
        </Row>
        <Row>
          <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
            <DashboardBodyItems
              name={"Yield Farming"}
              price={"$"}
            ></DashboardBodyItems>
          </Col>
          <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
            <DashboardBodyItems name={"Debt"} price={"$"}></DashboardBodyItems>
          </Col>
        </Row>
      </Container>
      <WalletModalWithGrid
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default AccountOverviewItem;
