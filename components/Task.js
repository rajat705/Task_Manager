// components/Task.js
import React from 'react';

const Task = ({ task, onComplete, onDelete, onEdit }) => {
  const { title, description, priority, completed } = task;

  return (
    <div className={`task ${priority} ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Priority: {priority}</p>
      <button onClick={onComplete}>{completed ? 'Mark as Pending' : 'Complete'}</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;
