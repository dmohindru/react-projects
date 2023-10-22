import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface GroceryItemSlice {
    id: number;
    itemName: string;
    itemQuantity: number;
    unitPrice: number;
}

const groceryItemsInitialState: GroceryItemSlice[] = [];

const groceryItemSlice = createSlice({
    name: 'groceryItems',
    initialState: groceryItemsInitialState,
    reducers: {
        addGroceryItem: (state: GroceryItemSlice[], groceryItem: PayloadAction<GroceryItemSlice>) => {
            console.log(`adding grocery item with id: ${groceryItem.payload.id}, name: ${groceryItem.payload.itemName}, quantity: ${groceryItem.payload.itemQuantity}, price: ${groceryItem.payload.unitPrice}`);
            state.push(groceryItem.payload); 
        },
        removeGroceryItem: (state: GroceryItemSlice[], groceryItem: PayloadAction<number>) => {
            console.log(`removing grocery item with id: ${groceryItem.payload}`);
            return state.filter(item => item.id !== groceryItem.payload);
        }
    }
});

export const { addGroceryItem, removeGroceryItem } = groceryItemSlice.actions;
export const groceryItemReducer = groceryItemSlice.reducer;