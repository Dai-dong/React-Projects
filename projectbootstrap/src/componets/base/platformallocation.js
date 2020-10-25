import React from "react";
import Styles from "./PlatformAllocationStyle.module.css";
import PlatformAllocationTitle from "./platformallocationtitle.js";
import PlatformAllocationBody from "./platformallocationbody.js";

function PlatformAllocation(props) {
  return (
    <div className={Styles.PlatformAllocation}>
      <div className={Styles.PlatformAllocationTitle}>
        <PlatformAllocationTitle>Platform Allocation</PlatformAllocationTitle>
      </div>
      <div className={Styles.PlatformAllocationBodyBox}>
        <PlatformAllocationBody></PlatformAllocationBody>
      </div>
    </div>
  );
}

export default PlatformAllocation;