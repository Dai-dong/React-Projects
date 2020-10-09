import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function AccountTitle(prpops) {
  return (
    <div className="account-title-main-box">
      <div className="app-logo-box">
        Cryptocurrency Aasset management Calculator
      </div>
      <div className="eth-wallet-address">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            defiportal.eth
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Watched</Dropdown.Header>
            <Dropdown.Item href="#/action-0"></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-1">Connect</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Combined Wallets View
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Manage Addresses</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Exit</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default AccountTitle;
