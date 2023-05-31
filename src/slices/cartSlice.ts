import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadState } from '../hooks/useLocalStorage';

export type CartItem = {
    id: number,
    quantity: number
};

interface IState {
    cartItems: CartItem[];
    isOpen: boolean
}

let initialState: IState;

const loadedState = loadState();
if (loadedState) {
    initialState = loadedState
} else {
    initialState = {
        cartItems: [],
        isOpen: false
    }
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const {cartItems} = state;
            if (cartItems.find(item => item.id === id) == null) {
                state.cartItems = [...cartItems, {id, quantity: 1}]
            } else {
                state.cartItems = cartItems.map( item => {
                    if( item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const {cartItems} = state;
            if(cartItems.find(item => item.id === id)?.quantity === 1) {
                state.cartItems = cartItems.filter(item => item.id !== id)
            } else {
                state.cartItems = cartItems.map( item => {
                    if( item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter( item => item.id !== id)
        },
        openCart: (state) => {
            state.isOpen = true
        },
        closeCart: (state) => {
            state.isOpen = false
        }
    }
});

const {reducer, actions} = cartSlice;

export default reducer;
export const {
    increaseQuantity, 
    decreaseQuantity,
    removeFromCart, 
    openCart, 
    closeCart} = actions;