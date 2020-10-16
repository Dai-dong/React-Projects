import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Styles from './AccountTitleStyle.module.css';

function AccountTitle(prpops) {
  return (
    <div className={Styles.accountTitleMain}>
      <div className={Styles.appLogo}>
        Cryptocurrency Aasset management Calculator
      </div>
      <div className={Styles.ethWalletAddress}>
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
