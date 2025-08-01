import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AirflowCalculator from './Airflow-Calculator.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AirflowConfigCalculator />
  </React.StrictMode>
);
