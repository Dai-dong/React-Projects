import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Styles from "./DashboardBodyStyle.module.css";
import DashboardBodyItemsTitle from "./dbititle.js";
import AccountOverviewItem from "./accountoverviewitem.js";
import PlatformsItem from "./platformsitem.js";
import AssetAllocation from "./assetallocation.js";
import PlatformAllocation from "./platformallocation.js";

function DashboradBody(props) {
  return (
    <div className={Styles.dashboardItemsBox}>
      <div className={Styles.accountOverviewBox}>
        <DashboardBodyItemsTitle>Account Overview</DashboardBodyItemsTitle>
        <AccountOverviewItem />
      </div>
      <div className={Styles.platformsBox}>
        <DashboardBodyItemsTitle>Platforms</DashboardBodyItemsTitle>
        <PlatformsItem />
      </div>
      <div className={Styles.allocationBox}>
        <Container>
          <Row>
            <Col md={6}>
              <AssetAllocation></AssetAllocation>
            </Col>
            <Col md={6}>
              <PlatformAllocation></PlatformAllocation>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DashboradBody;
