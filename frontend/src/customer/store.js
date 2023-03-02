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
      name: "닭꼬치",
      price: 4000,
      image: "/img/닭꼬치.jpeg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 2,
      name: "오뎅",
      price: 2000,
      image: "/img/오뎅.jpg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 3,
      name: "감자튀김",
      price: 4000,
      image: "/img/감자튀김.jpg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 4,
      name: "물",
      price: 1000,
      image: "/img/water.png",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 5,
      name: "와인",
      price: 15000,
      image: "/img/wine.png",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 6,
      name: "참이슬",
      price: 5000,
      image: "/img/소주.jpg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 7,
      name: "별빛 청하",
      price: 5000,
      image: "/img/별빛청하.jpg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 8,
      name: "진로",
      price: 5000,
      image: "/img/진로.jpg",
      amount: 0,
      receiptAmount: 0,
    },
    {
      id: 9,
      name: "맥주",
      price: 5000,
      image: "/img/맥주.jpg",
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
      localStorage.setItem("cart", JSON.stringify(state));
    },
    setReceiptProduct(state, action) {
      state[action.payload].receiptAmount = state[action.payload].amount;
    },
    setCart(state, { payload }) {
      return payload.data;
    },
  },
});
let table = createSlice({
  name: "table",
  initialState: [
    {
      id: 1,
      tableGroupId: 0,
      selected: 0,
      sharing: [1],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 2,
      tableGroupId: 0,
      selected: 0,
      sharing: [2],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 3,
      tableGroupId: 0,
      selected: 0,
      sharing: [3],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 4,
      tableGroupId: 0,
      selected: 0,
      sharing: [4],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 5,
      tableGroupId: 0,
      selected: 0,
      sharing: [5],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 6,
      tableGroupId: 0,
      selected: 0,
      sharing: [6],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 7,
      tableGroupId: 0,
      selected: 0,
      sharing: [7],
      menu: [],
      totalPrice: 0,
    },
    {
      id: 8,
      tableGroupId: 0,
      selected: 0,
      sharing: [8],
      menu: [],
      totalPrice: 0,
    },
  ],
  reducers: {
    setSelected(state, action) {
      state[action.payload].selected = !state[action.payload].selected;
    },
    setUsing(state) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].selected === true) {
          state[i].selected = 2;
        }
      }
    },
    setTableGroupID(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].selected === true) {
          state[i].tableGroupId = action.payload;
        }
      }
    },
  },
});

let user = createSlice({
  name: "user",
  initialState: [
    {
      id: "",
      pw: "",
    },
  ],
  reducers: {
    logInButton(state, { payload }) {
      state[0].id = payload.id;
      state[0].pw = payload.pw;
    },
    createUser(state, { payload }) {},
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
export let { setSelected, setUsing, setTableGroupID } = table.actions;
export let { logInButton } = user.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer,
    table: table.reducer,
    user: user.reducer,
  },
});
