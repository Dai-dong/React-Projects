import React from'react';
import AccountTitle from './base/accounttitle.js';
import MainTabNav from './base/tabnav';
import DashboradTab from './base/dashboardtab.js';

function AppHead(props){
    return(
      <React.Fragment>
         <AccountTitle/>
         <MainTabNav/>
         <DashboradTab/>
      </React.Fragment>
    );
}

export default AppHead;