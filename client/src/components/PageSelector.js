import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import goldImage from "../images/gold.jpg";
import silverImage from "../images/silver.jpg";

const PageSelector = () => {
  return (
    <div class="container-fluid" color="dark">
      <div class="row text-center">
        <div class="col-sm bg-dark m-2">
          <a href="*">
            <img src={goldImage} class="img-fluid pt-3 pb-2" alt="Gold"></img>
            <h2 class="text-white">Gold</h2>
          </a>
        </div>
        <div class="col-sm bg-dark m-2">
          <a href="*">
            <img
              src={silverImage}
              class="img-fluid pt-3 pb-2"
              alt="Silver"
            ></img>
            <h2 class="text-white">Silver</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
