import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppHead from './componets/AppHead';
import AppBody from './componets/AppBody';



ReactDOM.render(
  <React.StrictMode>
     <AppHead/>
     <AppBody/>
  </React.StrictMode>,
  document.getElementById('root')
);


