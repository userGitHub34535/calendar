import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './Components/Sidebar.js';
import CalendarWeekView from './Components/CalendarWeekView.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <CalendarWeekView />
  </React.StrictMode>
);
