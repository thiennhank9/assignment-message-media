import gifsAction from "./gifsAction";
import gifsSlice from "./gifsSlice";
import gifsSaga from "./gifsSaga";
import gifsSelector from "./gifsSelector";

const gifs = {
  action: gifsAction,
  reducer: gifsSlice.reducer,
  saga: gifsSaga,
  selector: gifsSelector,
};

export default gifs;
