/* eslint-disable jest/no-mocks-import */
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import GifsScreen from "../GifsScreen";
import { mockStore } from "../../redux/__mocks__/store";

test("GifScreen", () => {
  const tree = renderer
    .create(
      <Provider store={mockStore}>
        <GifsScreen />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
