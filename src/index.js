import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import { Provider } from "react-redux";
import rootReducer from "./js/reducers/index.js";
import { createStore } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

