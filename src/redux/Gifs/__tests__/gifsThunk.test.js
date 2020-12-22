/* eslint-disable jest/no-mocks-import */
import MockAdapter from "axios-mock-adapter";
import apiService from "../../../services/apiService";
import gifsAction from "../gifsAction";
import { GIPHY_API_KEY } from "../../../configs/giphy";
import { getMockStore } from "../../__mocks__/store";
import { fetchGifs } from "../gifsThunk";

const { fetchGifsRequest, fetchGifsSuccess, fetchGifsError } = gifsAction;

describe("gifsThunk", () => {
  test("fetchGifsSuccess", () => {
    const apiMock = new MockAdapter(apiService);
    const limit = 20;
    const offset = 0;

    const store = getMockStore();

    apiMock
      .onGet("/gifs/trending", {
        params: {
          api_key: GIPHY_API_KEY,
          rating: "g",
          limit,
          offset,
        },
      })
      .reply(200, {
        data: [],
      });

    return store.dispatch(fetchGifs({ page: 1, pageSize: 20 })).then(() => {
      expect(store.getActions()).toEqual([
        fetchGifsRequest(),
        fetchGifsSuccess({ gifs: [], page: 1, pageSize: 20 }),
      ]);
    });
  });

  test("fetchGifsError", () => {
    const apiMock = new MockAdapter(apiService);
    const limit = 20;
    const offset = 0;

    const store = getMockStore();

    apiMock
      .onGet("/gifs/trending", {
        params: {
          api_key: GIPHY_API_KEY,
          rating: "g",
          limit,
          offset,
        },
      })
      .reply(500, {
        data: [],
      });

    return store.dispatch(fetchGifs({ page: 1, pageSize: 20 })).then(() => {
      expect(store.getActions()).toEqual([
        fetchGifsRequest(),
        fetchGifsError(),
      ]);
    });
  });
});
