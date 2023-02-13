import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "우동",
      price: 7000,
      image: "/img/woodong.jpeg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 1,
      name: "물",
      price: 1000,
      image: "/img/water.png",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 2,
      name: "와인",
      price: 15000,
      image: "/img/wine.png",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 3,
      name: "닭꼬치",
      price: 4000,
      image: "/img/닭꼬치.jpeg",
      amount: 0,
      receiptAmount: 0,
    },
  ],
  reducers: {
    addAmount(state, action) {
      state[action.payload].amount++;
    },
    minusAmount(state, action) {
      state[action.payload].amount--;
    },
    setProduct(state, { payload }) {
      state[payload.id].amount = state[payload.id].amount + payload.amount;
    },
    deleteProduct(state, action) {
      state[action.payload].amount = 0;
    },
    setReceiptProduct(state, action) {
      state[action.payload].receiptAmount = state[action.payload].amount;
    },
    setCart(state, { payload }) {
      return payload.data;
    },
  },
});

export let {
  addAmount,
  minusAmount,
  setProduct,
  deleteProduct,
  setReceiptProduct,
  setCart,
} = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
