import React from "react";

function DashboradTab(props) {
  return (
    <div className="dashboard-main-box">
      <div className="asset-calculator-box">
        <div className="assets-box">Total Assets</div>
        <div className="assets-box">Total Debt</div>
        <div className="assets-box">Net Worth</div>
      </div>
      <div className="dashboard-items-box">
        <div className="account-overview-box">
          <div className="account-overview-title-box">
            Account Overview
          </div>
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
    </div>
  );
}

export default DashboradTab;
