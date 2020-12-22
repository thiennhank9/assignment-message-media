/* eslint-disable jest/no-mocks-import */
import renderer, { act } from "react-test-renderer";
import { Provider } from "react-redux";
import GifsScreen from "../GifsScreen";
import { fetchGifs } from "../../redux/Gifs/gifsThunk";
import { getMockStore } from "../../redux/__mocks__/store";

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

describe("GifScreen", () => {
  test("render correctly", () => {
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

  test("have button and click load more", () => {
    const tree = renderer.create(
      <Provider store={mockStore}>
        <GifsScreen />
      </Provider>
    );
    const snapshot = tree.toJSON();
    const root = tree.root;
    const buttonLoadMore = root.findByType("button");
    expect(root.findByType("button")).not.toBeNull();
    act(() => {
      buttonLoadMore.props.onClick();
    });
    expect(snapshot).toMatchSnapshot();
  });
});
