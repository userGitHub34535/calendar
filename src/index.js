import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './Components/Sidebar.js';
import CalendarWeekView from './Components/CalendarWeekView.js';
import {ContextWrapper} from './Context/ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <Sidebar />
      <CalendarWeekView />
    </ContextWrapper>
  </React.StrictMode>
);
