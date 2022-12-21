import React from 'react';
import { Outlet } from 'react-router-dom';
import 'normalize.css'
import './App.scss'

const App = () => {
  return (
    <div className="app-wrapper">
      <div className={'app-header'}>🥎 Mini Bank</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

