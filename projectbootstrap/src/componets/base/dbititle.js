import React from 'react';
import Styles from './DBItemsTitleStyle.module.css'

function DashboardBodyItemsTitle(props){
    return(
        <div className={Styles.dashboardBodyItemsTitleBox}>{props.children}</div>
    );
}

export default DashboardBodyItemsTitle;