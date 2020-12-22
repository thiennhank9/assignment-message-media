import renderer from "react-test-renderer";
import Spinners from "../Spinners";

test("Spinners - render correctly", () => {
  const tree = renderer.create(<Spinners />).toJSON();
  expect(tree).toMatchSnapshot();
});
