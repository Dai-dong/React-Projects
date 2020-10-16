import React from 'react';
import DashboardBodyItems from './dbitems';
import Styles from './DBItemsTitleStyle.module.css'

function DashboardBodyItemsTitle(props){
    return(
        <div className={Styles.dashboardBodyItemsTitleBox}>Account Overview</div>
    );
}

export default DashboardBodyItemsTitle;