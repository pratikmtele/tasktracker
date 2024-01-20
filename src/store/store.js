import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/todo/taskSlice';

const store = configureStore({
    reducer: taskReducer
});

export default store;