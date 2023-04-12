import React from "react";
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
