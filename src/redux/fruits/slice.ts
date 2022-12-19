import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFruits } from "./asyncActions";
import { Fruits, FruitsSliceState, Status } from "./types";

const initialState: FruitsSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const fruitslice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Fruits[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFruits.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchFruits.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchFruits.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = fruitslice.actions;

export default fruitslice.reducer;
