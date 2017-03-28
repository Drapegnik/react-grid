import React from 'react';

import { Table } from './components';
import logo from './logo.svg';
import data from './data/data.json';
import './App.css';

/**
 * Main component of application
 * @returns {ReactElement}
 */
function App() {
  const columns = [
    { title: 'tool' },
    { title: 'initiator', formatter: o => `${o.id}-${o.name}` },
    { title: 'result' },
    { title: 'duration', formatter: o => `${o}ms` },
  ];

  return (
    <div className="App" >
      <div className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello from React-grid</h2>
      </div>
      <div className="App-intro" >
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
