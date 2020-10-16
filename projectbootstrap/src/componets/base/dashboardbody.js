import React from 'react';
import Styles from './DashboardBodyStyle.module.css'

function DashboradBody(props) {
  return (
    <div className={Styles.dashboardItemsBox}>
      <div className={Styles.accountOverviewBox}>
        <div className="account-overview-title-box">Account Overview</div>
        <div className="account-items-box">
          <div className="account-name-box">Wallet</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">Deposits</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">Investments</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">Yield Farming</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">Debt</div>
          <div className="account-price-box">$</div>
        </div>
      </div>
      <div className="platforms-box">
        <div className="platforms-title-box">Platforms</div>
        <div className="account-items-box">
          <div className="account-name-box">Synthetix</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">Compound</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">Aave</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">dYdX</div>
          <div className="account-price-box">$</div>
        </div>
        <div className="account-items-box">
          <div className="account-name-box">PoolTogether</div>
          <div className="account-price-box">$</div>
        </div>
      </div>
    </div>
  );
}

export default DashboradBody;
