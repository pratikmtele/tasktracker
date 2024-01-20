import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todo/taskSlice';

function AddTask() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTaskHandler = (e) => {
        e.preventDefault();
        if (!input) return;
        dispatch(addTask(input));
        setInput("");
    }

    return (
        <form className='flex' onSubmit={addTaskHandler}>
            <input className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5' placeholder='Write Todo...' type='text' onChange={(e) => setInput(e.target.value)} value={input} />
            <button className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-700'>Add</button>
        </form>
    )
}

export default AddTask
