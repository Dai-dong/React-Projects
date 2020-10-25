import React from "react";
import Styles from "./AllocationBodyItemsStyle.module.css";
import { ProgressBar, Container, Row, Col} from "react-bootstrap";

function PlatformAllocationBodyItems(props) {
  return (
    <div className={Styles.allocationBodyItemsBox}>
      <Container>
        <Row>
          <Col md={3} className={Styles.allocationCharItemsMainBox}>
            <div className={Styles.chartTitle}>{props.titlename}</div>
          </Col>
          <Col md={6} className={Styles.allocationCharItemsMainBox}>
            <ProgressBar now={props.barchart} />
          </Col>
          <Col md={3} className={Styles.allocationCharItemsMainBox}>
            <div className={Styles.chartValue}>{props.valueno}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlatformAllocationBodyItems;