import React from "react";
import DashboardBodyItemsTitle from "./dbititle.js";
import DashboardBodyItems from "./dbitems.js";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./AccountOverviewItemStyle.module.css";

function PlatformsItem(props) {
  return (
    <Container>
      <Row>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems
            name={"Synthetix"}
            price={"$"}
          ></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems
            name={"Compound"}
            price={"$"}
          ></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems name={"Aave"} price={"$"}></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems name={"dYdX"} price={"$"}></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems
            name={"PoolTogether"}
            price={"$"}
          ></DashboardBodyItems>
        </Col>
      </Row>
    </Container>
  );
}

export default PlatformsItem;
