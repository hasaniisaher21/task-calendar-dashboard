import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
});

const TaskModal = ({ date, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: '', description: '', category: '' }}
      validationSchema={TaskSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addTask({
          id: uuidv4(),
          ...values,
          date: date.format('YYYY-MM-DD'),
        }));
        resetForm();
        onClose();
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div style={{ marginBottom: 10 }}>
            <Field name="title" as={Input} placeholder="Title" />
            {errors.title && touched.title && <div style={{ color: 'red' }}>{errors.title}</div>}
          </div>

          <div style={{ marginBottom: 10 }}>
            <Field name="description" as={Input.TextArea} placeholder="Description" />
          </div>

          <div style={{ marginBottom: 10 }}>
            <Select
              placeholder="Select Category"
              onChange={(value) => setFieldValue('category', value)}
              style={{ width: '100%' }}
            >
              <Option value="success">Success</Option>
              <Option value="warning">Warning</Option>
              <Option value="issue">Issue</Option>
              <Option value="info">Info</Option>
            </Select>
            {errors.category && touched.category && <div style={{ color: 'red' }}>{errors.category}</div>}
          </div>

          <Button type="primary" htmlType="submit">Add Task</Button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskModal;
