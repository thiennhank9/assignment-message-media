import renderer from "react-test-renderer";
import GifInfo from "../GifInfo";

test("GifInfo - render correctly", () => {
  const tree = renderer.create(<GifInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
