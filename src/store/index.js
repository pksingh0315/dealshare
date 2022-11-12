import { configureStore,createSlice } from "@reduxjs/toolkit";
const initialState={cart:JSON.parse(localStorage.getItem('cartItems'))||[]
    ,totalQuantity:0,totalPrice:0}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            console.log(action)
            
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
              itemInCart.price=(+itemInCart.quantity)*(+action.payload.currentPrice)
              state.totalPrice=(+state.totalPrice)+(+action.payload.currentPrice)
              state.totalQuantity++
              localStorage.setItem("cartItems",JSON.stringify(state.cart))
            } else {
              state.cart.push({ ...action.payload, quantity: 1,price:action.payload.currentPrice});
              state.totalQuantity++
              state.totalPrice=(+state.totalPrice)+(+action.payload.currentPrice)
              localStorage.setItem("cartItems",JSON.stringify(state.cart))
            };
            
        
               localStorage.setItem("cartItems",JSON.stringify(state.cart))
            
        },
        removeItem: (state, action) => {
            
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
            state.totalQuantity=(+state.totalQuantity)-(+action.payload.quantity)
            state.totalPrice=(+state.totalPrice)-((+action.payload.currentPrice)*(+action.payload.quantity));
            localStorage.setItem("cartItems",JSON.stringify(state.cart))
          },
     
            
          
          decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
                state.totalQuantity--
                state.totalPrice=(+state.totalPrice)-(+action.payload.currentPrice)
                localStorage.setItem("cartItems",JSON.stringify(state.cart))
            } else {
              item.quantity--;
              state.totalQuantity--
              state.totalPrice=(+state.totalPrice)-(+action.payload.currentPrice)
              localStorage.setItem("cartItems",JSON.stringify(state.cart))
            }
            item.price=(+item.quantity)*(+action.payload.currentPrice)
            localStorage.setItem("cartItems",JSON.stringify(state.cart))
          },
    
    }
})
//console.log(cartSlice)
const store=configureStore({
    reducer:cartSlice.reducer
})
export const cartAction=cartSlice.actions;
export default store