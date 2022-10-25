import React from "react";
import Search from "../Search/Search";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../FormComponents/Button/Button";

const HomeNavbar = (props) => {
  return (
    <>
      <div className="flex z-10 px-5 py-3 items-center justify-between">
        <div className="lg:w-1/4">
          <Button onClick={props.toggleSideBar}>
            <p className="lg:inline hidden">Components</p>
            <ChevronRightIcon
              className="h-5 w-5 inline-block cursor-pointer"
              aria-hidden="true"
            />
          </Button>
        </div>
        <div className="lg:w-2/4 w-3/4">
          <Search />
        </div>
        <div className="lg:w-1/4 hidden"></div>
      </div>
    </>
  );
};

export default HomeNavbar;
