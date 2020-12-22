import renderer from "react-test-renderer";
import GifImage from "../GifImage";

test("GifImage - render correctly", () => {
  const tree = renderer.create(<GifImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
