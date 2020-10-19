import React from "react";
import DashboardBodyItems from "./dbitems.js";
import { Container, Row, Col } from "react-bootstrap";
import Styles from './AccountOverviewItemStyle.module.css';

function AccountOverviewItem(props) {
  return (
    <Container>
      <Row>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems name={"Wallet"} price={"$"}></DashboardBodyItems>
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
  );
}

export default AccountOverviewItem;