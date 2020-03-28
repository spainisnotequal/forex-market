import React, { useState } from "react";
import axios from "axios";

import AppNavbar from "./components/AppNavbar";
import PageSelector from "./components/PageSelector";
import AppTable from "./components/AppTable";
import AppFooter from "./components/AppFooter";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  axios.get("/api/forexPrices").then(res => setData(res.data));

  return (
    <div className="App">
      <AppNavbar />
      <PageSelector />
      <AppTable data={data} />
      <AppFooter />
    </div>
  );
}

export default App;
