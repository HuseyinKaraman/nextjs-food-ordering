import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0,
    quantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            state.quantity += 1;
            state.total += product.price;
            state.products.push(product);
        },
        // removeProduct: (state, action) => {
        //     const id = action.payload;
        //     const existingItem = state.products.find((item) => item.id === id);
        //     state.quantity--;
        //     if (existingItem.quantity === 1) {
        //         state.products = state.products.filter((item) => item.id !== id);
        //     } else {
        //         existingItem.quantity--;
        //         existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        //     }
        //     state.total = state.products.reduce((total, item) => total + item.price, 0);
        // },
        // deleteProduct: (state, action) => {
        //     const id = action.payload;
        //     const existingItem = state.products.find((item) => item.id === id);
        //     state.products = state.products.filter((item) => item.id !== id);
        //     state.quantity = state.quantity - existingItem.quantity;
        //     state.total = state.total - existingItem.totalPrice;
        // },
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
