import { configureStore } from "@reduxjs/toolkit";
import cart from "../slices/cartSlice";

import {saveState} from "../hooks/useLocalStorage";

export const store = configureStore({
    reducer: {
        cart
    },
});

store.subscribe( () => {
    setInterval( () => saveState(store.getState().cart), 1000)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch