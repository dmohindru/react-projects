import { configureStore } from "@reduxjs/toolkit";
import { groceryItemReducer, addGroceryItem, removeGroceryItem } from "./slice/itemSlice";

const store = configureStore({
    reducer: {
        groceryItems: groceryItemReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
    store,
    addGroceryItem,
    removeGroceryItem
};

export type { GroceryItemSlice } from './slice/itemSlice';
