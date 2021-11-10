import React from "react";
import Me from "./components/Me";
import Who from "./components/Who"
import Info from "./components/Info";

const Home = () => {
  return (
    <div className="flex flex-wrap overflow-hidden">

      <div className="w-full overflow-hidden">
        <Me />
      </div>

      <div className="w-full overflow-hidden">
        <Info />
      </div>

      <div className="w-full overflow-hidden">
        <Who />
      </div>

      <div className="w-full overflow-hidden">
      </div>
      
      <div className="w-full overflow-hidden">
      </div>
    </div>
  );
}

export default Home;
