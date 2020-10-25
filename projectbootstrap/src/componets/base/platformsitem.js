import React from "react";
import DashboardBodyItems from "./dbitems.js";
import { Container, Row, Col} from "react-bootstrap";
import Styles from "./AccountOverviewItemStyle.module.css";
import synth from '../../Image/Platforms/Synthetix-icon.svg';
import comp from '../../Image/Platforms/Compound-icon.svg';
import aave from'../../Image/Platforms/Aave-icon.svg';
import dydx from '../../Image/Platforms/DYDX-icon.svg';
import pool from '../../Image/Platforms/PoolTogether-icon.png';

function PlatformsItem(props) {
  return (
    <Container>
      <Row>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems
            address={synth}
            imagename={"Synthetix"}
            name={"Synthetix"}
            price={"$"}
          ></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems
            address={comp}
            imagename={"Compound"}
            name={"Compound"}
            price={"$"}
          ></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems  address={aave}
            imagename={"Aave"} name={"Aave"} price={"$"}></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems  address={dydx}
            imagename={"dYdX"} name={"dYdX"} price={"$"}></DashboardBodyItems>
        </Col>
        <Col md={4} className={Styles.dashboardBodyItemsMainBox}>
          <DashboardBodyItems
           address={pool}
           imagename={"PoolTogether"}
            name={"PoolTogether"}
            price={"$"}
          ></DashboardBodyItems>
        </Col>
      </Row>
    </Container>
  );
}

export default PlatformsItem;
