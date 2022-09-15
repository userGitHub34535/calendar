import React from 'react';
import ReactDOM from 'react-dom/client';
import DatePanel from './DatePanel.js';
import Calendar from './Calendar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DatePanel />
    <Calendar />
  </React.StrictMode>
);
