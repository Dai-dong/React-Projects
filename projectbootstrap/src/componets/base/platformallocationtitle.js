import React from 'react';
import Styles from './AssetAllocationTitleStyle.module.css';

function PlatformAllocationTitle(props){
    return(
          <div className={Styles.allocationTitleBox}>{props.children}</div>
    );
}

export default PlatformAllocationTitle;