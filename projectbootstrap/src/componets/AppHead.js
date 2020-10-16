import React from'react';
import AccountTitle from './base/accounttitle.js';
import MainTabNav from './base/tabnav';
import DashboradTop from './base/dashboardtop.js';

function AppHead(props){
    return(
      <React.Fragment>
         <AccountTitle/>
         <MainTabNav/>
         <DashboradTop/>
      </React.Fragment>
    );
}

export default AppHead;