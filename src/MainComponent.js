import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import ListView from './components/ListView';
import CalendarView from './components/CalendarView';
import GanttChartView from './components/GanttChartView';
import './styles.css';

const tasks = {
  'To Do': [{ id: '1', title: 'Task 1' }, { id: '2', title: 'Task 2' }],
  'In Progress': [{ id: '3', title: 'Task 3' }],
  'Done': [{ id: '4', title: 'Task 4' }]
};

const events = [
  { id: 0, title: 'Event 1', start: new Date(), end: new Date() },
  { id: 1, title: 'Event 2', start: new Date(), end: new Date() }
];

const ganttTasks = [
  { id: '1', name: 'Task 1', start: '2024-12-01', end: '2024-12-10', progress: 20 },
  { id: '2', name: 'Task 2', start: '2024-12-05', end: '2024-12-15', progress: 50 }
];

const MainComponent = () => {
  const [view, setView] = useState('kanban');

  const handleDragEnd = (result) => {
    // Handle task drag and drop logic here
  };

  return (
    <div>
      <div>
        <button onClick={() => setView('kanban')}>Kanban Board</button>
        <button onClick={() => setView('list')}>List View</button>
        <button onClick={() => setView('calendar')}>Calendar View</button>
        <button onClick={() => setView('gantt')}>Gantt Chart</button>
      </div>
      {view === 'kanban' && <KanbanBoard tasks={tasks} onDragEnd={handleDragEnd} />}
      {view === 'list' && <ListView tasks={Object.values(tasks).flat()} />}
      {view === 'calendar' && <CalendarView events={events} />}
      {view === 'gantt' && <GanttChartView tasks={ganttTasks} />}
    </div>
  );
};

export default MainComponent;