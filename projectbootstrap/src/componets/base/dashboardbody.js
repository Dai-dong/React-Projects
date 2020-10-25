import React from 'react';
import Styles from './DashboardBodyStyle.module.css';
import DashboardBodyItemsTitle from "./dbititle.js";
import AccountOverviewItem from './accountoverviewitem.js';
import PlatformsItem from './platformsitem.js';
import AssetAllocation from './assetallocation.js';

function DashboradBody(props) {
  return (
    <div className={Styles.dashboardItemsBox}>
      <div className={Styles.accountOverviewBox}>
        <DashboardBodyItemsTitle>Account Overview</DashboardBodyItemsTitle>
        <AccountOverviewItem/>
      </div>
      <div className={Styles.platformsBox}>
        <DashboardBodyItemsTitle>Platforms</DashboardBodyItemsTitle>
        <PlatformsItem/>
      </div>
      <div className={Styles.allocationBox}>
         <AssetAllocation></AssetAllocation>
      </div>
    </div>
  );
}

export default DashboradBody;
