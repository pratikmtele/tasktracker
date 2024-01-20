import { createSlice, current, nanoid } from '@reduxjs/toolkit';

const initialState = {
    tasks: JSON.parse(localStorage.getItem("Tasks")) || []
};

const dateFormatter = () => {
    let date = new Date();
    let dateString = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getFullYear()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    return dateString;
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                name: action.payload,
                date: dateFormatter(),
                complete: false
            }
            state.tasks.push(task);
            localStorage.setItem("Tasks", JSON.stringify(state.tasks));
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
            localStorage.setItem("Tasks", JSON.stringify(state.tasks));
        },

        toggleComplete: (state, action) => {
            let index = state.tasks.findIndex((task) => task.id === action.payload);
            if (index === -1) return;

            state.tasks[index].complete = !state.tasks[index].complete;
            localStorage.setItem("Tasks", JSON.stringify(state.tasks));
        },
        dragDropSortTask: (state, action) => {
            state.tasks = action.payload;
            localStorage.setItem("Tasks", JSON.stringify(state.tasks));
        }
    }
});

export const { addTask, deleteTask, toggleComplete, dragDropSortTask } = taskSlice.actions;

export default taskSlice.reducer;