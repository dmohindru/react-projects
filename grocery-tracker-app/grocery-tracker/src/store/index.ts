import { configureStore } from "@reduxjs/toolkit";
import { groceryItemReducer, addGroceryItem, removeGroceryItem, updateGroceryItem } from "./slice/itemSlice";

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
    removeGroceryItem,
    updateGroceryItem
};

export type { GroceryItemSlice, GroceryItemUpdateSlice } from './slice/itemSlice';
