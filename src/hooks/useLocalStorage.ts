import type { CartItem } from "../slices/cartSlice";

const KEY = "cart";

export function loadState() {
    try {
        const stateFromStorge = localStorage.getItem(KEY);
        if (!stateFromStorge) return undefined;
        return JSON.parse(stateFromStorge);
    } catch (e) {
        return undefined
    }
}

export async function saveState(state: {cartItems: CartItem[], isOpen: boolean}) {
    try {
        const stateToStorage = JSON.stringify(state);
        localStorage.setItem(KEY, stateToStorage)
    } catch (e) {
        return undefined
    }
}