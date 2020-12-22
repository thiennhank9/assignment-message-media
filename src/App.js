import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import { GifsScreen } from "./screens";

function App() {
  return (
    <Provider store={store}>
      <GifsScreen />
    </Provider>
  );
}

export default App;
