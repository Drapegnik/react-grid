import React from 'react';

import { Table } from './components';
import logo from './logo.svg';
import rawData from './data/data.json';
import rawDetails from './data/details.json';
import './App.css';

/**
 * Function that for each row of data adds details
 * * if number of details columns more that initial columns,
 * * then all extra details will be passed in last column of initial table
 *
 * @param {Array} titles table columns names
 * @param {Array} data initial data
 * @param {Object} details for data
 * @returns {Array}
 */
const addDetailsToData = (titles, data, details) => {
  const dataWithDetails = [];

  data.forEach((row) => {
    dataWithDetails.push(row);
    const rawDetail = details[row.id] || {};
    const detail = {
      id: `details-${row.id}`,
      hide: true,
    };

    Object.keys(rawDetail).forEach((key, ind) => {
      const title = ind < titles.length ? titles[ind] : titles[titles.length - 1];
      detail[title] = detail[title] ? detail[title] += ` | ${key}: ${rawDetail[key]}` : `${key}: ${rawDetail[key]}`;
      detail[`notFormat-${title}`] = true;
    });

    dataWithDetails.push(detail);
  });

  return dataWithDetails;
};

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
  const titles = columns.map(col => col.title);

  return (
    <div className="App" >
      <div className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello from React-grid</h2>
      </div>
      <div className="App-intro" >
        <Table data={addDetailsToData(titles, rawData, rawDetails)} columns={columns} />
      </div>
    </div>
  );
}

export default App;
