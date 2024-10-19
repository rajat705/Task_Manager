// components/TaskForm.js
import React, { useState } from 'react';

export default function TaskForm({ onFormSubmit, onCancel }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'low',
    status: 'pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(task); // Call the function passed from the parent
    setTask({ title: '', description: '', priority: 'low', status: 'pending' }); // Reset form
  };

  return (
    <div className="task-form-container">
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label>
          Task Name:
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Priority:
          <select name="priority" value={task.priority} onChange={handleInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Status:
          <select name="status" value={task.status} onChange={handleInputChange}>
            <option value="pending">Pending</option>
            <option value="assigned">Assigned</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
