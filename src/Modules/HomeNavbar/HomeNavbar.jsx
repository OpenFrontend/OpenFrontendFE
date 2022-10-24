import React from "react";
import Search from "../Search/Search";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const HomeNavbar = (props) => {
  return (
    <>
      <div className="flex z-10 px-5 py-3 items-center justify-between">
        <div className="w-1/4">
          <button onClick={props.toggleSideBar}>
            Components{" "}
            <ChevronRightIcon
              //   onClick={toggleSideBar}
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
    </>
  );
};

export default HomeNavbar;
