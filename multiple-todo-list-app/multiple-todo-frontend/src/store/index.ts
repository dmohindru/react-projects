import { configureStore } from '@reduxjs/toolkit';
import { addTodoTitle, removeTodoTitle, todoTitleReducer } from './slice/todoTitleSlice';
import { addTodo, updateTodo, todoReducer } from './slice/todoSlice';

const store = configureStore({
    reducer: {
        todoTitles: todoTitleReducer,
        todo: todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
    store,
    addTodoTitle,
    removeTodoTitle,
    addTodo,
    updateTodo
};

export type { TodoTitleSlice } from './slice/todoTitleSlice';
export type { 
    Todo, 
    TodoUpdate, 
    TodoAddAction, 
    TodoUpdateAction, 
    TodoSlice 
} from './slice/todoSlice';

