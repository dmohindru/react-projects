import { configureStore } from '@reduxjs/toolkit';
import { addTodoTitle, removeTodoTitle, todoTitleReducer } from './slice/todoTitleSlice';

const store = configureStore({
    reducer: {
        todoTitles: todoTitleReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
    store,
    addTodoTitle,
    removeTodoTitle
};

export type { TodoTitleSlice } from './slice/todoTitleSlice';

