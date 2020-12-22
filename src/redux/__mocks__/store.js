import configureMockStore from "redux-mock-store";

const getMockStore = configureMockStore();
const mockState = {
  gifs: {
    gifs: [],
    page: 1,
    pageSize: 15,
    fetching: false,
    error: null,
  },
};
const mockStore = getMockStore(mockState);

export { mockStore, getMockStore };
