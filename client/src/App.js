import React from "react";
import AppNavbar from "./components/AppNavbar";
import PageSelector from "./components/PageSelector";
import AppTable from "./components/AppTable";
import AppFooter from "./components/AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <PageSelector />
      <AppTable />
      <AppFooter />
    </div>
  );
}

export default App;
