import gifsSlice from "../gifsSlice";
import gifsAction from "../gifsAction";

const { reducer, initialState } = gifsSlice;

describe("gifsSlice", () => {
  test("fetchGifsRequest", () => {
    const result = reducer(initialState, gifsAction.fetchGifsRequest());
    expect(result).toMatchObject({
      fetching: true,
    });
  });

  test("fetchGifsSuccess - get first gifs", () => {
    const result = reducer(
      initialState,
      gifsAction.fetchGifsSuccess({
        page: 1,
        pageSize: 20,
        gifs: [{ id: 1 }, { id: 2 }],
      })
    );
    expect(result).toMatchObject({
      page: 1,
      pageSize: 20,
      gifs: [{ id: 1 }, { id: 2 }],
      fetching: false,
    });
  });
  test("fetchGifsSuccess - concat gifs", () => {
    const result = reducer(
      { ...initialState, gifs: [{ id: 1 }, { id: 2 }] },
      gifsAction.fetchGifsSuccess({
        page: 2,
        pageSize: 2,
        gifs: [{ id: 3 }, { id: 4 }],
      })
    );
    expect(result).toMatchObject({
      page: 2,
      pageSize: 2,
      gifs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      fetching: false,
    });
  });
  test("fetchGifsError", () => {
    const stateRequesting = reducer(
      initialState,
      gifsAction.fetchGifsRequest()
    );
    expect(stateRequesting).toMatchObject({
      fetching: true,
    });
    const result = reducer(stateRequesting, gifsAction.fetchGifsError());
    expect(result).toMatchObject({
      fetching: false,
      error: "FETCH GIFS ERROR!",
    });
  });
});
