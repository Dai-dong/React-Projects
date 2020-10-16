import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DashboradTop from './dashboardtop.js';
import Styles from './MainTabNavStyle.module.css';


function MainTabNav(props) {
  return (
    <div className={Styles.mainTabNav}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="dashboard" title="Dashboard">
          <DashboradTop/>
        </Tab>
        <Tab eventKey="invest" title="Invest"></Tab>
        <Tab eventKey="transactions" title="Transactions"></Tab>
      </Tabs>
    </div>
  );
}

export default MainTabNav;
