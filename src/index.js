import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";


import App from './App';
import UserDetailProvider from './context/user-detail.context';

import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <UserDetailProvider>
        <App />
      </UserDetailProvider>
    </Router>
    
  </React.StrictMode>
);

