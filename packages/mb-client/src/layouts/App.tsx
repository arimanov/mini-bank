import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'normalize.css'
import './App.scss'
import { TestModel } from 'mb-shared';

const App = () => {
  const extrude = (): TestModel => {
    return {
      id: "12313",
      createdAt: new Date(),
    };
  } 
  
  useEffect(() => {
    console.log('🎁', extrude())
  }, [])
  
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

