import { createSlice } from "@reduxjs/toolkit";
const  cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        price:0
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
            state.price+=(action.payload.price);
        },
        clearCart:(state)=>{
            state.items=[];
            state.price=0;
        },
        
        removeItem: (state, action) => {
            const removedItem = action.payload;
            const removedItemPrice = removedItem.price;
            state.items = state.items.filter(item => item.id !== removedItem.id);
            state.price -= removedItemPrice;
        }
    }
})

export const { addItem, clearCart,removeItem}= cartSlice.actions;
export default cartSlice.reducer;