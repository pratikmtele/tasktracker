import React, { useRef } from 'react';
import './App.css'
import AddTask from './components/AddTask';
import Task from './components/Task';
import { useSelector, useDispatch } from 'react-redux';
import draggedOverTask, { dragDropSortTask } from './features/todo/taskSlice';

function App() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  var dragTask = useRef < Number > (0);
  var draggedOverTask = useRef < Number > (0);

  // switch the tasks 
  function handleDragSort() {
    var tempTasks = [...tasks];
    const temp = tempTasks[dragTask];
    tempTasks[dragTask] = tempTasks[draggedOverTask];
    tempTasks[draggedOverTask] = temp;
    dispatch(dragDropSortTask(tempTasks));
  }

  return (
    <>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-white text-center text-3xl font-bold mb-8 mt-2'>Manage Your Tasks</h1>
          <div className='mb-4'>
            <AddTask />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {tasks.map((task, index) => (
              <div className='w-full cursor-move' key={task.id}
                draggable onDragStart={() => dragTask = index}
                onDragEnter={() => draggedOverTask = index}
                onDragEnd={handleDragSort}
                onDragOver={(e) => e.preventDefault()}>

                <Task task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
