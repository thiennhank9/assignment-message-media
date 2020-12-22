import { createAction } from "@reduxjs/toolkit";
import gifsSlice from "./gifsSlice";

const gifsActions = {
  ...gifsSlice.actions,
  fetchGifs: createAction("gifsSaga/fetchGifs"),
};

export default gifsActions;
