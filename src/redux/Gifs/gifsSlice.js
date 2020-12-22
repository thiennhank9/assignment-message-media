import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_PAGE_SIZE = 20;

const initialStateGifs = {
  gifs: [],
  fetching: false,
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
  error: null,
};

const GifsSlice = createSlice({
  name: "gifs",
  initialState: initialStateGifs,
  reducers: {
    fetchGifsRequest: (state) => ({ ...state, fetching: true }),
    fetchGifsSuccess: (state, action) => {
      const { payload } = action;
      const { page, pageSize, gifs } = payload;

      state.fetching = false;
      state.page = page;
      state.pageSize = pageSize;
      state.gifs = page === 1 ? gifs : [...state.gifs, ...gifs];
    },
    fetchGifsError: (state) => ({
      ...state,
      fetching: false,
      error: "FETCH GIFS ERROR!",
    }),
  },
});

export default GifsSlice;
