import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

const localStorageKey = 'cartItems';

export const saveToLocalStorage = (cartData) => {
  localStorage.setItem(localStorageKey, JSON.stringify(cartData));
};

export const loadLocalStorage = () => {
  const cartData = localStorage.getItem(localStorageKey);
  return cartData ? JSON.parse(cartData) : [];
};

const initialState = {
    items: loadLocalStorage(),
    totalAmount: 0,
    totalQuantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index >= 0) {
                let quantity = state.items[index].quantity + 1;
                state.items[index].quantity = quantity;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            state.totalAmount +=  action.payload.price;
            state.totalQuantity = state.totalQuantity + 1;
            console.log(state.items);
            saveToLocalStorage(state.items);
            console.log("Cantidad: " + state.totalQuantity + " Total: " + state.totalAmount)
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index > -1) {
                state.items.splice(index, 1);
            }
            state.totalAmount -= action.payload.price;
            state.totalQuantity = state.totalQuantity - 1;
            console.log(state.items);
            saveToLocalStorage(state.items);
            console.log("Cantidad: " + state.totalQuantity + " Total: " + state.totalAmount)
        },
        decreaseCartItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            if (index >= 0) {
                let quantity = state.items[index].quantity - 1
                state.items[index].quantity = quantity
                state.totalAmount -= action.payload.price
                state.totalQuantity--
                console.log(state.items)
                saveToLocalStorage(state.items)
                console.log("Cantidad: " + state.totalQuantity + " Total: " + state.totalAmount)
            }
        },
        increaseCartItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id)
            if (index >= 0) {
                let quantity = state.items[index].quantity + 1
                state.items[index].quantity = quantity
                state.totalAmount += action.payload.price
                state.totalQuantity++
                console.log(state.items)
                saveToLocalStorage(state.items)
                console.log("Cantidad: " + state.totalQuantity + " Total: " + state.totalAmount)
            }
        },
        readCartLocalStorage: (state) => {
            try {
                const localItems = loadLocalStorage();
                state.items = [...localItems];
                let total = 0;
                let quantity = 0;
                for (let i = 0; i < localItems.length; i++) {
                    total += localItems[i].price;
                    quantity += localItems[i].quantity
                }
                state.totalAmount = total;
                state.totalQuantity = quantity;
                console.log(state.items);
                console.log("Cantidad: " + state.totalQuantity + " Total: " + state.totalAmount)
            } catch (e) {
                console.log (e.message);
            }
        }
    }
});

export const { addToCart, removeFromCart, clearCart, getTotals, readCartLocalStorage, decreaseCartItem, increaseCartItem } = cartSlice.actions;
export default cartSlice.reducer;