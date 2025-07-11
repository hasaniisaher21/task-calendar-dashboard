import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Select, Button } from 'antd';

const COLORS = {
  success: '#52c41a',
  warning: '#faad14',
  issue: '#ff4d4f',
  info: '#1890ff',
};

const TaskChart = () => {
  const allTasks = useSelector(state => state.tasks.tasks);
  const [filter, setFilter] = useState('');

  const filtered = filter ? allTasks.filter(task => task.category === filter) : allTasks;

  const data = Object.values(
    filtered.reduce((acc, task) => {
      acc[task.category] = acc[task.category] || { name: task.category, value: 0 };
      acc[task.category].value += 1;
      return acc;
    }, {})
  );

  return (
    <div style={{ marginTop: 40 }}>
      <h3>Task Distribution</h3>

      <Select
        placeholder="Filter by Category"
        value={filter || undefined}
        onChange={val => setFilter(val)}
        allowClear
        style={{ width: 200, marginRight: 10 }}
      >
        <Select.Option value="success">Success</Select.Option>
        <Select.Option value="warning">Warning</Select.Option>
        <Select.Option value="issue">Issue</Select.Option>
        <Select.Option value="info">Info</Select.Option>
      </Select>

      <Button onClick={() => setFilter('')}>Reset</Button>

      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default TaskChart;
