import React from 'react';
import DashboradTop from './base/dashboardtop.js'; 
import DashboradBody from './base/dashboardbody.js';

function AppBody(prorps) {
  return (
    <React.Fragment>
      <DashboradTop />
      <DashboradBody/>
    </React.Fragment>
  );
}

export default AppBody;