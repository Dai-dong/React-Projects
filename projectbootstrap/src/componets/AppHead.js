import React from'react';
import AccountTitle from './base/accounttitle.js';
import MainTabNav from './base/tabnav';


function AppHead(props){
    return(
      <React.Fragment>
         <AccountTitle/>
         <MainTabNav/>
      </React.Fragment>
    );
}

export default AppHead;