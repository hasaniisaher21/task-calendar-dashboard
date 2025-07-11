import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Tag, Button } from 'antd';
import { deleteTask } from './tasksSlice';

const categoryColors = {
  success: 'green',
  warning: 'orange',
  issue: 'red',
  info: 'blue',
};

const TaskList = ({ date }) => {
  const dispatch = useDispatch();

  const tasks = useSelector(state =>
    state.tasks.tasks.filter(task => task.date === date.format('YYYY-MM-DD'))
  );

  return (
    <List
      itemLayout="horizontal"
      dataSource={tasks}
      renderItem={task => (
        <List.Item
          actions={[
            <Button type="text" danger onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
          ]}
        >
          <List.Item.Meta
            title={<>{task.title} <Tag color={categoryColors[task.category]}>{task.category}</Tag></>}
            description={task.description}
          />
        </List.Item>
      )}
    />
  );
};

export default TaskList;
