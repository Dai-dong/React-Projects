import React from 'react';
import Styles from './DBItemsStyle.module.css';

function DashboardBodyItems(props){
    return(
        <div className={Styles.dashboardBodyItemsBox}>
          <div className={Styles.dashboardBodyItemsNameBox}>Wallet</div>
          <div className={Styles.dashboardBodyItemsPriceBox}>$</div>
        </div>
    );
}

export default DashboardBodyItems;