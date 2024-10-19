import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false); // To toggle form visibility
  const [tasks, setTasks] = useState([]); // Store tasks
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // Dark Mode toggle


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle form submission
  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the list
    setFormVisible(false); // Close the form after submitting
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Remove task by ID
  };

  const handleEdit = (task) => {
    setEditingTask(task); // Set the task being edited
    setFormVisible(true); // Show the form with the task details for editing
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      {/* Sidebar Component */}
      <Sidebar
        onCreateTableClick={() => setFormVisible(true)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="content">
        {/* If form is not visible, show tasks */}
        {!isFormVisible ? (
          <div className="tasks-container">
            <h2>Task Management</h2>
            {tasks.length === 0 ? (
              <p>No tasks available. Click 'Create new table' to add a task.</p>
            ) : (
              <ul className="task-list">
                {tasks.map((task, index) => (
                  <li key={index} className={`task ${task.priority}`}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <span className="priority-label">{task.priority} priority</span>
                    <span className="status-label">{task.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
        ) : (
          // Task Form Component
          <TaskForm onFormSubmit={handleFormSubmit} onCancel={() => setFormVisible(false)} />
        )}
      </div>
    </div>
  );
}
