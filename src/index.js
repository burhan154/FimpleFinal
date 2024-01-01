import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from "./App";
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './store/store';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
