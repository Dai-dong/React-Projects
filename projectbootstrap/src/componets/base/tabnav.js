import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DashboradTab from './dashboardtab.js';

function MainTabNav(props) {
  return (
    <div className="main-tab-nav-box">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="dashboard" title="Dashboard">
          <DashboradTab />
        </Tab>
        <Tab eventKey="invest" title="Invest"></Tab>
        <Tab eventKey="transactions" title="Transactions"></Tab>
      </Tabs>
    </div>
  );
}

export default MainTabNav;
