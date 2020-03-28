import React from "react";
import AppNavbar from "./AppNavbar";
import PageSelector from "./PageSelector";
import AppFooter from "./AppFooter";

const HomePage = () => {
  return (
    <div className="HomePage">
      <AppNavbar />
      <PageSelector />
      <AppFooter />
    </div>
  );
};

export default HomePage;
