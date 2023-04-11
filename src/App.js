import React from "react";
import Login from "./Componentes/Lista";
import Wallet from "./Wallet";
import NotFound from "./Componentes/NotFound";
import { Route, Routes } from "react-router-dom";

import { Outlet } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default App;
