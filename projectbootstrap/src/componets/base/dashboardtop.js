import React from 'react';
import DashboradBody from './dashboardbody.js';
import Styles from './DashboardTopStyle.module.css';
import { Container, Row, Col } from 'react-bootstrap';

function DashboradTop(props) {
  return (
    <div className={Styles.dashboardMainBox}>
      <div className={Styles.assetCalculatorBox}>
        <Container>
          <Row>
            <Col md={4} className={Styles.summaryBox}>
              <div className={Styles.summaryMain}>
                <div className={Styles.summaryName}>Total Assets</div>
                <div className={Styles.summaryValue}>$</div>
              </div>
            </Col>
            <Col md={4} className={Styles.summaryBox}>
              <div className={Styles.summaryMain}>
                <div className={Styles.summaryName}>Total Debt</div>
                <div className={Styles.summaryValue}>$</div>
              </div>
            </Col>
            <Col md={4} className={Styles.summaryBox}>
              <div className={Styles.summaryMain}>
                <div className={Styles.summaryName}>Net Worth</div>
                <div className={Styles.summaryValue}>$</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <DashboradBody />
    </div>
  );
}

export default DashboradTop;
