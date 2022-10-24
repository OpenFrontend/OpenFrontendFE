import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import Cards from "../Modules/Cards/Cards";
import HomeNavbar from "../Modules/HomeNavbar/HomeNavbar";
import Modal from "../Modules/Modal/Modal";
import Search from "../Modules/Search/Search";
import SideBar from "../Modules/SideBar/SideBar";

const Home = () => {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    console.log(sideBar);
    setSideBar(!sideBar);
  };
  return (
    <div className="bg-gray-200 m-1">
      <div className="sticky w-full z-10 bg-white top-0">
        <HomeNavbar toggleSideBar={toggleSideBar} />

        {sideBar && <SideBar toggleSideBar={toggleSideBar} />}
      </div>
      <div className="text-center font-bold text-2xl py-5">
        <h3>Check out some of today’s popular shots</h3>
      </div>
      <div
        className={`lg:px-20 py-5 `}
        style={{ marginLeft: `${sideBar ? "20%" : "0"}` }}
      >
        <Cards />
      </div>
    </div>
  );
};

export default Home;
