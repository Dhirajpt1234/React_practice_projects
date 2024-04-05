import React from "react";
import store from "./redux/store";
import CakeContainer from "./Components/cakeContainer";
import { Provider } from "react-redux";

const CakeShopapp = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
  );
};

export default CakeShopapp;
