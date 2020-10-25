import React from 'react';
import Styles from './AssetAllocationTitleStyle.module.css';

function AssetAllocationTitle(props){
    return(
          <div className={Styles.allocationTitleBox}>{props.children}</div>
    );
}

export default AssetAllocationTitle;