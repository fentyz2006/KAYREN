import React from 'react';
import './CalendarView.css';

const CalendarView = ({ events }) => {
  return (
    <div className="calendar-view">
      {events.map(event => (
        <div key={event.id} className="calendar-event">
          {event.title}: {event.start.toLocaleDateString()} - {event.end.toLocaleDateString()}
        </div>
      ))}
    </div>
  );
};

export default CalendarView;