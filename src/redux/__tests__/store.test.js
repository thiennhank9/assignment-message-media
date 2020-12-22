import store from "../store";

test("store", () => {
  expect(store.getState()).toMatchObject({
    gifs: {},
  });
});
