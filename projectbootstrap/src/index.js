import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppHead from './componets/AppHead';
import AppBody from './componets/AppBody';



ReactDOM.render(
  <React.Fragment>
     <AppHead/>
     <AppBody/>
  </React.Fragment>,
  document.getElementById('root')
);


