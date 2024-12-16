import React from 'react';
import './ListView.css';

const ListView = ({ tasks }) => {
  return (
    <ul className="list-view">
      {tasks.map(task => (
        <li key={task.id} className="list-item">
          <span className="icon">🔹</span> {/* Replace with appropriate icons */}
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default ListView;