import React from 'react';
import './GanttChartView.css';

const GanttChartView = ({ tasks }) => {
  return (
    <div className="gantt-chart-view">
      {tasks.map(task => (
        <div key={task.id} className="gantt-task">
          {task.name}: {task.start} - {task.end} ({task.progress}%)
        </div>
      ))}
    </div>
  );
};

export default GanttChartView;