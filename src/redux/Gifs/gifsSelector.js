const getGifs = (state) => state.gifs.gifs;
const getPage = (state) => state.gifs.page;
const getPageSize = (state) => state.gifs.pageSize;
const getFetching = (state) => state.gifs.fetching;

const gifsSelector = {
  getGifs,
  getPage,
  getPageSize,
  getFetching,
};

export default gifsSelector;
