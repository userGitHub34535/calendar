import React from 'react';
import ReactDOM from 'react-dom/client';
import SidePanel from './Components/SidePanel.js';
import CalendarWeekView from './Components/CalendarWeekView.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidePanel />
    <CalendarWeekView />
  </React.StrictMode>
);
