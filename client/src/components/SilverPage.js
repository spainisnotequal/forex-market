import React, { useState } from "react";
import axios from "axios";

import AppNavbar from "./AppNavbar";
import SilverPriceTable from "./SilverPriceTable";
import AppFooter from "./AppFooter";

const SilverPage = () => {
  const [data, setData] = useState([]);
  axios.get("/api/forexPrices").then(res => setData(res.data));

  return (
    <div className="HomePage">
      <AppNavbar />
      <SilverPriceTable data={data} />
      <AppFooter />
    </div>
  );
};

export default SilverPage;
