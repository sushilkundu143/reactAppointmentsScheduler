import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="columns" id="app-content">
      <div className="column is-1 is-fullheight is-hidden-touch theme-sidebar fix-w" id="navigation">
        <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
