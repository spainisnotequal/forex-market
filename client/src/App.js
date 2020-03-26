import React from "react";
import AppNavbar from "./components/AppNavbar";
import PageSelector from "./components/PageSelector";
import AppFooter from "./components/AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <PageSelector />
      <AppFooter />
    </div>
  );
}

export default App;
