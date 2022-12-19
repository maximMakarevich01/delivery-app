import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import fruits from "./fruits/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    fruits,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
