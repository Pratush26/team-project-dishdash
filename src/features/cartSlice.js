import { createSlice } from "@reduxjs/toolkit";

/* ------------------ helpers ------------------ */

const getCartFromStorage = () => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
};

const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

/* ------------------ initial state ------------------ */

const initialState = {
    items: getCartFromStorage(),
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existingItem = state.items.find(
                (i) => i.foodId === item.foodId
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...item,
                    quantity: 1,
                });
            }

            saveCartToStorage(state.items);
        },

        isInCart: (state, action) => {
            return state.items.some(
                (item) => item.foodId === action.payload
            );
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.foodId !== action.payload
            );

            saveCartToStorage(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cart");
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;