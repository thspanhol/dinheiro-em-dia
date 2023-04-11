import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
/* import { BrowserRouter } from "react-router-dom"; */
import {
  RouterProvider,
  Navigate,
  createHashRouter,
} from "react-router-dom";
import Login from "./Componentes/Lista";
import Wallet from "./Wallet";

const routerHash = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/carteira", element: <Wallet /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={routerHash} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
