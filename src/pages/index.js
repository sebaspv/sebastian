import Home from "./Home";
import React from "react";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Sebastian Ponce</title>
      </Helmet>
      <Home />
    </div>
    
  );
};

export default index;
