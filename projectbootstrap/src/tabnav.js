import React from "react";
import Tabs from "react-bootstrap/Tabs";
import DashboradTab from "./dashboardtab.js"

function MainTabNav(props) {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="dashboard" title="Dashboard">
      <DashboradTab/>
      </Tab>
      <Tab eventKey="invest" title="Invest">
      </Tab>
      <Tab eventKey="explore" title="Explore">
      </Tab>
      <Tab eventKey="transactions" title="Transactions">
      </Tab>
    </Tabs>
  );
}

export default MainTabNav;