import React from "react";
import Me from "./components/Me";
import Who from "./components/Who"
import Info from "./components/Info";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
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
        <Cta />
      </div>
      
      <div className="w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
