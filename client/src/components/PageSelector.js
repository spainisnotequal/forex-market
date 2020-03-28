import React from "react";
import { Link } from "react-router-dom";

import goldImage from "../images/gold.jpg";
import silverImage from "../images/silver.jpg";

const PageSelector = () => {
  return (
    <div class="container-fluid" color="dark">
      <div class="row text-center">
        <div class="col-sm bg-dark m-2">
          <Link to="/gold">
            <img src={goldImage} class="img-fluid pt-3 pb-2" alt="Gold"></img>
            <h2 class="text-white">Gold</h2>
          </Link>
        </div>
        <div class="col-sm bg-dark m-2">
          <Link to="/silver">
            <img
              src={silverImage}
              class="img-fluid pt-3 pb-2"
              alt="Silver"
            ></img>
            <h2 class="text-white">Silver</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
