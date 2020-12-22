import gifs from "../Gifs";
import rootReducer from "../reducers";

test("rootReducer", () => {
  expect(rootReducer.gifs).toEqual(gifs.reducer);
});
