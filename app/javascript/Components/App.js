import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Greeting from "./Greeting";

const App = () => {
  return (
    <Provider store={store}>
      <Greeting />
    </Provider>
  );
};

export default App;
