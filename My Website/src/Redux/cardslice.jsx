import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              if(existingItem.quantity < action.payload.rating.count){
                existingItem.quantity++;
              }
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        decrease: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity--;
                if (existingItem.quantity === 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
        },

        removeAllItemFromBasket: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },

        clearBasket: (state) => {
            state.items = [];
        }
    }
});

export const { addToBasket, removeAllItemFromBasket, decrease, clearBasket } = cardSlice.actions;
export default cardSlice.reducer;
