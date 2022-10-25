import React from "react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SideBar = (props) => {
  const toggleSideBar = () => {
    props.toggleSideBar();
  };

  return (
    <div className="absolute border-r-2 lg:w-1/5 w-2/4 bg-white h-screen z-10">
      <div className="flex justify-end  m-2 text-black">
        <XMarkIcon
          onClick={toggleSideBar}
          className="h-8 w-8 mx-1 cursor-pointer"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col lg:items-center mx-3">
        <div className="flex border lg:w-2/4 my-2 lg:px-10 px-5 py-3 rounded-full hover:bg-gray-300 hover:text-white">
          <BellIcon className="h-6 w-6 mx-1" aria-hidden="true" />
          <a>search</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
