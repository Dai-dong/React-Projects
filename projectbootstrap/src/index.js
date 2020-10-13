import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AccountTitle from './componets/base/accounttitle';
import './index.css';
import AppHead from './componets/AppHead';



ReactDOM.render(
  <React.StrictMode>
     <AppHead/>
  </React.StrictMode>,
  document.getElementById('root')
);


