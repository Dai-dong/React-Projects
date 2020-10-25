import React from 'react';
import Styles from './AssetAllocationBodyItemsStyle.module.css';
import {ProgressBar} from 'react-bootstrap';

function AssetAllocationBodyItems(props) {
  return (
    <div className={Styles.allocationChartItemsBox}>
      <div className={Styles.chartTitle}>{props.titlename}</div>
      <div className={Styles.chartBar}>
        <ProgressBar now={props.barchart} />
      </div>
      <div className={Styles.chartValue}>{props.valueno}</div>
    </div>
  );
}

export default AssetAllocationBodyItems;
