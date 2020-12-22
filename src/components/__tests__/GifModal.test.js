import renderer from "react-test-renderer";
import GifModal from "../GifModal";

test("GifModal - render correctly", () => {
  const tree = renderer.create(<GifModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
