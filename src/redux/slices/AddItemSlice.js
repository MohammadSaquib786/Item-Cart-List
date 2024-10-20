import {createSlice} from '@reduxjs/toolkit'

const itemSlice = createSlice({
    name : 'itemSlice',
    initialState : {
        items:[]
    },
    reducers: {
        addItemToCart:(state, action)=>{
            const newItem = { index: state.items.length, name: action.payload, quantity: 1, amount:10 }; 
            state.items.push(newItem);
        },
        addQuantityToCart: (state, action) => {
            const cartItem = state.items.find(item => item.index === action.payload);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.items.push({
                    quantity: 1,
                    index: action.payload,
                    amount: 10 
                });
            }
        },
        removeQuantityToCart:(state, action) => {
            const cartItem = state.items.find(item => item.index == action.payload)
            if(cartItem){
                cartItem.quantity -=1;
                if(cartItem.quantity == 0){
                    state.items = state.items.filter(item => item.index !== action.payload)
                }
            }
        },
     
    }
})
export const {addItemToCart, addQuantityToCart, removeQuantityToCart} = itemSlice.actions;
export default itemSlice.reducer;