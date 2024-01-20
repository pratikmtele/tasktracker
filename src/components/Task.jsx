import React, { useState } from 'react';
import { deleteTask, toggleComplete } from '../features/todo/taskSlice';
import { useDispatch } from 'react-redux';

function Todos({ task }) {
    const dispatch = useDispatch();
    const [completed, setCompleted] = useState(task.complete);

    const onChange = () => {
        dispatch(toggleComplete(task.id));
        setCompleted(!completed);
    }

    return (
        <>
            <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  ${completed ? "bg-[#c6e9a7]" : ""}`}>

                <input type="checkbox" className="cursor-pointer" checked={completed} onChange={onChange} />

                <p className={`py-0.5 cursor-default w-80 ${completed ? "line-through text-black" : 'text-white'}`}>{task.name}</p>

                <p className={`w-full text-right cursor-default text-xs py-1.5 px-2 ${completed ? "text-black" : "text-gray-400"}`}>{task.date}</p>

                <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 " onClick={() => dispatch(deleteTask(task.id))}>
                    ❌
                </button>
            </div>
        </>
    )
}

export default Todos
