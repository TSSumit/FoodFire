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
            const price=action.payload.defaultPrice;
            if(!price){
                price=action.payload.price;
            }
            if(price)state.price+=(action.payload.price);
            console.log(action.payload.price)
        },
        clearCart:(state)=>{
            state.items=[];
            state.price=0;
        },
        
        removeItem: (state, action) => {
            const index = action.payload;
            const removedItemPrice = state.items[index].price;
            if(!removedItemPrice)removedItemPrice=state.items[index].defaultPrice;
            state.items.splice(index, 1); // Remove one item at the found index

            state.price -= removedItemPrice;
        }
        
    }
})

export const { addItem, clearCart,removeItem}= cartSlice.actions;
export default cartSlice.reducer;