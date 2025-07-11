import React, { useState } from 'react';
import { Calendar, Modal, Button } from 'antd';
import dayjs from 'dayjs';

import TaskForm from '../features/tasks/TaskModal';
import TaskList from '../features/tasks/TaskList';
import ChartView from '../features/tasks/TaskChart';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSelect = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  return (
    <>
      <Calendar onSelect={onSelect} fullscreen={false} />
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        title={`Tasks for ${selectedDate.format('YYYY-MM-DD')}`}
      >
        <TaskForm date={selectedDate} onClose={() => setIsModalOpen(false)} />
        <TaskList date={selectedDate} />
      </Modal>
      <ChartView />
    </>
  );
};

export default CalendarView;
