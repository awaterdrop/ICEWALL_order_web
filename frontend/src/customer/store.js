import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "우동",
      price: 7000,
      image: "/img/woodong.jpeg",
      amount: 0,
      totalPrice: 0,
    },
    {
      id: 1,
      name: "물",
      price: 1000,
      image: "/img/water.jpeg",
      amount: 0,
      totalPrice: 0,
    },
    {
      id: 2,
      name: "와인",
      price: 15000,
      image: "/img/wine.jpeg",
      amount: 0,
      totalPrice: 0,
    },
    {
      id: 3,
      name: "닭꼬치",
      price: 4000,
      image: "/img/닭꼬치.jpeg",
      amount: 0,
      totalPrice: 0,
    },
  ],
  reducers: {
    addCount(state, action) {
      state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[action.payload].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
