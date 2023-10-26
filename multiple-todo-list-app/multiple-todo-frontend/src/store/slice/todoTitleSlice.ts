import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { v4 as uuidv4 } from 'uuid';

export interface TodoTitleSlice {
    id?: string,
    title: string
}

const titleInitialState: TodoTitleSlice[] = [];

const titleSlice = createSlice({
    name: 'todoTitleSlice',
    initialState: titleInitialState,
    reducers: {
        addTodoTitle(state: TodoTitleSlice[], todoTitle: PayloadAction<TodoTitleSlice>) {
            console.log('Adding todo title: ', todoTitle.payload.title);
            state.push(todoTitle.payload);
        },
        removeTodoTitle(state: TodoTitleSlice[], todoTitle: PayloadAction<TodoTitleSlice>) {
            return state.filter(item => item.title !== todoTitle.payload.title);
        }
    }
});

export const {addTodoTitle, removeTodoTitle} = titleSlice.actions;
export const todoTitleReducer = titleSlice.reducer;