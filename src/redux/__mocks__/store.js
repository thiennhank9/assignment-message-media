import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];

const getMockStore = configureMockStore(middlewares);

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
