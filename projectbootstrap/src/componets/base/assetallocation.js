import React from 'react';
import Styles from './AssetAllocationStyle.module.css';
import AssetAllocationTitle from './assetallocationtitle.js';
import AssetAllocationBody from './assetallocationbody.js';

function AssetAllocation(props) {
  return (
    <div className={Styles.AssetAllocation}>
      <AssetAllocationTitle>Asset Allocation</AssetAllocationTitle>
      <AssetAllocationBody></AssetAllocationBody>
    </div>
  );
}

export default AssetAllocation;
