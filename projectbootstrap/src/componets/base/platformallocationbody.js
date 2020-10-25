import React from 'react';
import Styles from './PlatformAllocationBodyStyle.module.css';
import PlatformAllocationBodyItems from './platformallocationbodyitems.js';

function PlatformAllocationBody(props) {
  return (
    <div className={Styles.platformAllocationBodyBox}>
      <PlatformAllocationBodyItems
        titlename={"dYdX"}
        barchart={"67.01"}
        valueno={"67.01%"}
      ></PlatformAllocationBodyItems>
      <PlatformAllocationBodyItems
        titlename={"Aave"}
        barchart={"12.99"}
        valueno={"12.99%"}
      ></PlatformAllocationBodyItems>
      <PlatformAllocationBodyItems
        titlename={"Synthetix"}
        barchart={"9.82"}
        valueno={"9.82%"}
      ></PlatformAllocationBodyItems>
      <PlatformAllocationBodyItems
        titlename={"Compound"}
        barchart={"8.89"}
        valueno={"8.89%"}
      ></PlatformAllocationBodyItems>
      <PlatformAllocationBodyItems
        titlename={"PoolTogether"}
        barchart={"1.22"}
        valueno={"1.22%"}
      ></PlatformAllocationBodyItems>
    </div>
  );
}

export default PlatformAllocationBody;