import React from "react";
import Login from "./Componentes/Lista";
import Wallet from "./Wallet";
import NotFound from "./Componentes/NotFound";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/carteira" element={<Wallet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
