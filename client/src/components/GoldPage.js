import React, { useState } from "react";
import axios from "axios";

import AppNavbar from "./AppNavbar";
import GoldPriceTable from "./GoldPriceTable";
import AppFooter from "./AppFooter";

const GoldPage = () => {
  const [data, setData] = useState([]);
  axios.get("/api/forexPrices").then(res => setData(res.data));

  return (
    <div className="HomePage">
      <AppNavbar />
      <GoldPriceTable data={data} />
      <AppFooter />
    </div>
  );
};

export default GoldPage;
