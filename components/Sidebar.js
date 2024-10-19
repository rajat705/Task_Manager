// components/Sidebar.js
import React from 'react';

export default function Sidebar({ onCreateTableClick, darkMode, toggleDarkMode }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Task Manager</h2>
      </div>
      <button className="new-table-btn" onClick={onCreateTableClick}>
        Create new table
      </button>
      <div className="theme-toggle">
        <button onClick={toggleDarkMode}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </div>
  );
}
