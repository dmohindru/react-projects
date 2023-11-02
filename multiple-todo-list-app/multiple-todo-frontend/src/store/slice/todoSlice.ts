import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
    id?: string,
    todoText: string,
    done: boolean,
    deleted: boolean
}

export interface TodoUpdate {
    id: string,
    done?: boolean,
    deleted?: boolean
}

export interface TodoAddAction {
    todoListTitle: string,
    todo: Todo
}

export interface TodoUpdateAction {
    todoListTitle: string,
    todo: TodoUpdate
}

export interface TodoSlice {
    [todoListTitle: string]: Todo[]
}

const todoInitialState: TodoSlice= {}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: todoInitialState,
    reducers: {
        addTodo(state: TodoSlice, todo: PayloadAction<TodoAddAction>) {
            if (!state[todo.payload.todoListTitle]) {
                state[todo.payload.todoListTitle] = [];
            }
            todo.payload.todo.id = uuidv4();
            state[todo.payload.todoListTitle].push(todo.payload.todo);
        },
        updateTodo(state: TodoSlice, todo: PayloadAction<TodoUpdateAction>) {
            const foundTodo = state[todo.payload.todoListTitle].find(item => item.id === todo.payload.todo.id);

            // deleted key takes precedence over done key
            if (foundTodo && todo.payload.todo.deleted) {
                foundTodo.deleted = true;
                foundTodo.done = true;
            }
            else if (foundTodo) {
                foundTodo.done = todo.payload.todo.done || false;
            }               
        }
    }
});

export const { addTodo, updateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;