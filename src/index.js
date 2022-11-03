import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar.js';
import Sidebar from './Components/Sidebar.js';
import CalendarWeekView from './Components/CalendarWeekView.js';
import "./Styles/Page.css";
import {ContextWrapper} from './Context/ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <Navbar />
      <div className="SidebarAndCalendarContainer">
      <Sidebar />      
      <CalendarWeekView />
      </div>
    </ContextWrapper>
  </React.StrictMode>
);
