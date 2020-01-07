import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Sequelize = require('sequelize');
  // Option 1: Passing parameters separately
  const sequelize = new Sequelize('TestDBVidit', 'viditkothari', 'Pa$$w0rd', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
          instanceName: 'SQLTOJSON',
            encrypt: true,
            requestTimeout: 30000
        }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });


  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
