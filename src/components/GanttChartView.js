import React, { useEffect } from 'react';
import Gantt from 'frappe-gantt';

const GanttChartView = ({ tasks }) => {
  useEffect(() => {
    new Gantt('#gantt', tasks);
  }, [tasks]);

  return <div id="gantt"></div>;
};

export default GanttChartView;
