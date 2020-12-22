import renderer from "react-test-renderer";
import GifItem from "../GifItem";

test("GifItem - render correctly", () => {
  const props = {
    gif: {
      images: {
        small: "small_url",
      },
    },
  };
  const tree = renderer.create(<GifItem {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
