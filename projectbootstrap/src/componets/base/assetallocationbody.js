import React from 'react';
import Styles from './AssetAllocationBodyStyle.module.css';
import AssetAllocationBodyItems from './assetallocationbodyitems.js';

function AssetAllocationBody(props) {
  return (
    <div className={Styles.assetAllocationBodyBox}>
      <AssetAllocationBodyItems
        titlename={"Wallet"}
        barchart={"68.8"}
        valueno={"68.8%"}
      ></AssetAllocationBodyItems>
      <AssetAllocationBodyItems
        titlename={"Deposits"}
        barchart={"25.68"}
        valueno={"25.68%"}
      ></AssetAllocationBodyItems>
      <AssetAllocationBodyItems
        titlename={"Investments"}
        barchart={"5.49"}
        valueno={"5.49%"}
      ></AssetAllocationBodyItems>
      <AssetAllocationBodyItems
        titlename={"Yield Farming"}
        barchart={"0.02"}
        valueno={"0.02%"}
      ></AssetAllocationBodyItems>
    </div>
  );
}

export default AssetAllocationBody;
