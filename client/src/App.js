import React from "react";
import AppNavbar from "./components/AppNavbar";
import PageSelector from "./components/PageSelector";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <PageSelector />
    </div>
  );
}

export default App;
