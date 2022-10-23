import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Cards from "../Modules/Cards/Cards";
import Search from "../Modules/Search/Search";
import SideBar from "../Modules/SideBar/SideBar";

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    console.log(sideBar);
    setSideBar(!sideBar);
  };
  return (
    <div className="bg-white m-1">
      <div className="flex  px-5 py-3 items-center justify-between">
        <div className="w-1/4">
          <button onClick={toggleSideBar}>
            Components{" "}
            <ChevronRightIcon
              onClick={toggleSideBar}
              className="h-5 w-5 inline-block cursor-pointer"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="w-2/4">
          <Search />
        </div>
        <div className="w-1/4"></div>
      </div>
      {sideBar && <SideBar toggleSideBar={toggleSideBar} />}
      <div className="text-center font-bold text-2xl py-5">
        <h3>Check out some of today’s popular shots</h3>
      </div>
      <div className="lg:px-20 py-5">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
