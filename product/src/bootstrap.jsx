import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';

import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
