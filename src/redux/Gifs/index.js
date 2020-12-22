import gifsAction from "./gifsAction";
import gifsSlice from "./gifsSlice";
import gifsSelector from "./gifsSelector";

const gifs = {
  action: gifsAction,
  reducer: gifsSlice.reducer,
  selector: gifsSelector,
};

export default gifs;
