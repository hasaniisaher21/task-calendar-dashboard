import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/tasksSlice'; // ✅ Correct path

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
