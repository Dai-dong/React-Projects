import React from "react";
import Styles from "./DBItemsStyle.module.css";

function DashboardBodyItems(props) {
  return (
    <div className={Styles.dashboardBodyItemsBox}>
      <div className={Styles.dashboardBodyItemsNameBox}>{props.name}</div>
      <div className={Styles.dashboardBodyItemsPriceBox}>{props.price}</div>
    </div>
  );
}

export default DashboardBodyItems;
