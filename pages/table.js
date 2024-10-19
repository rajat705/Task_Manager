import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // For animations

export default function TaskTable() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'Todo', priority: 'low', todos: [] },
    { id: 2, title: 'Task 2', status: 'Doing', priority: 'medium', todos: [] },
    { id: 3, title: 'Task 3', status: 'Todo', priority: 'high', todos: [] },
    { id: 4, title: 'Task 4', status: 'Done', priority: 'low', todos: [] },
  ]);

  const router = useRouter();

  return (
    <div className="task-table-container">
      <h1>{router.query.tableName || 'Task Table'}</h1>

      <div className="task-columns">
        {/* Todo Column */}
        <div className="column">
          <h2>Todo ({tasks.filter((task) => task.status === 'Todo').length})</h2>
          <TransitionGroup>
            {tasks
              .filter((task) => task.status === 'Todo')
              .map((task) => (
                <CSSTransition key={task.id} timeout={500} classNames="fade">
                  <div className={`task ${task.priority}`}>
                    <h3>{task.title}</h3>
                    <p>{task.todos.length} of {task.todos.length} todos</p>
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>

        {/* Doing Column */}
        <div className="column">
          <h2>Doing ({tasks.filter((task) => task.status === 'Doing').length})</h2>
          <TransitionGroup>
            {tasks
              .filter((task) => task.status === 'Doing')
              .map((task) => (
                <CSSTransition key={task.id} timeout={500} classNames="fade">
                  <div className={`task ${task.priority}`}>
                    <h3>{task.title}</h3>
                    <p>{task.todos.length} of {task.todos.length} todos</p>
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>

        {/* Done Column */}
        <div className="column">
          <h2>Done ({tasks.filter((task) => task.status === 'Done').length})</h2>
          <TransitionGroup>
            {tasks
              .filter((task) => task.status === 'Done')
              .map((task) => (
                <CSSTransition key={task.id} timeout={500} classNames="fade">
                  <div className={`task ${task.priority}`}>
                    <h3>{task.title}</h3>
                    <p>{task.todos.length} of {task.todos.length} todos</p>
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
