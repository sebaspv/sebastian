import React from "react";
import Me from "./components/Me";
import Who from "./components/Who"

const Home = () => {
  return (
    <div class="flex flex-wrap overflow-hidden">

      <div class="w-full overflow-hidden">
        <Me />
      </div>

      <div class="w-full overflow-hidden">
        <Who />
      </div>

      <div class="w-full overflow-hidden">
      </div>

      <div class="w-full overflow-hidden">
      </div>

    </div>
  );
}

export default Home;
