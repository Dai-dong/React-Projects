import React from "react";
import Styles from "./DBItemsStyle.module.css";
import {Image} from "react-bootstrap";

function DashboardBodyItems(props) {
  return (
    <div className={Styles.dashboardBodyItemsBox} onClick={props.handleClick}>
            <Image src={props.address} alt={props.imagename} width="auto" height="40px" roundedCircle/>
            <div className={Styles.dashboardBodyItemsNameBox}>{props.name}</div>
            <div className={Styles.dashboardBodyItemsPriceBox}>
              {props.price}
            </div>
    </div>
  );
}

export default DashboardBodyItems;
