/* eslint-disable jest/no-mocks-import */
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import GifsScreen from "../GifsScreen";
import { getMockStore } from "../../redux/__mocks__/store";

describe("GifScreen", () => {
  test("render correctly with 4 items", () => {
    const mockStore = getMockStore({
      gifs: {
        gifs: [
          { id: 1, images: { small: "image_small" } },
          { id: 2, images: { small: "image_small" } },
          { id: 3, images: { small: "image_small" } },
          { id: 4, images: { small: "image_small" } },
        ],
        page: 1,
        pageSize: 4,
      },
    });

    const tree = renderer.create(
      <Provider store={mockStore}>
        <GifsScreen />
      </Provider>
    );

    const snapshot = tree.toJSON();
    const root = tree.root;
    expect(root.findAllByProps({ className: "gif-image" })).toHaveLength(4);
    expect(snapshot).toMatchSnapshot();
  });

  test("should render fetching", () => {
    const mockStore = getMockStore({
      gifs: {
        gifs: [],
        fetching: true,
      },
    });

    const tree = renderer.create(
      <Provider store={mockStore}>
        <GifsScreen />
      </Provider>
    );
    const snapshot = tree.toJSON();
    const root = tree.root;
    const spinners = root.findAllByProps({ className: "spinner-grow" });
    expect(spinners).not.toBeNull();
    expect(snapshot).toMatchSnapshot();
  });
});
