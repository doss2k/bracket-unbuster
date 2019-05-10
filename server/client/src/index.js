import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import App from "./components/App";
import reducers from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

// Creates the Redux store
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const app = (
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
