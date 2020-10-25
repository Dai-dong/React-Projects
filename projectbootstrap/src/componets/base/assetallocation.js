import React from "react";
import Styles from "./AssetAllocationStyle.module.css";
import AssetAllocationTitle from "./assetallocationtitle.js";
import AssetAllocationBody from "./assetallocationbody.js";

function AssetAllocation(props) {
  return (
    <div className={Styles.AssetAllocation}>
      <div className={Styles.AssetAllocationTitle}>
        <AssetAllocationTitle>Asset Allocation</AssetAllocationTitle>
      </div>
      <div className={Styles.AssetAllocationBodyBox}>
        <AssetAllocationBody></AssetAllocationBody>
      </div>
    </div>
  );
}

export default AssetAllocation;
