import React from "react";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const SideBar = (props) => {
  const toggleSideBar = () => {
    props.toggleSideBar();
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="absolute  border-r-2 lg:w-1/4 w-3/4 bg-white h-full z-10">
      <div className="flex justify-end  m-2 text-black">
        <XMarkIcon
          onClick={toggleSideBar}
          className="h-8 w-8 mx-1 cursor-pointer"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex border w-2/4 my-2 px-10 py-3 rounded-full hover:bg-gray-300 hover:text-white">
          <BellIcon className="h-6 w-6 mx-1" aria-hidden="true" />
          <a>Navbar</a>
        </div>
        <div className="flex border w-2/4 my-2 px-10 py-3 rounded-full hover:bg-gray-300 hover:text-white">
          <BellIcon className="h-6 w-6 mx-1" aria-hidden="true" />
          <a>Sidebar</a>
        </div>
        <div className="flex border w-2/4 my-2 px-10 py-3 rounded-full hover:bg-gray-300 hover:text-white">
          <BellIcon className="h-6 w-6 mx-1" aria-hidden="true" />
          <a>search</a>
        </div>
        <div className="flex border w-2/4 my-2 px-10 py-3 rounded-full hover:bg-gray-300 hover:text-white">
          <BellIcon className="h-6 w-6 mx-1" aria-hidden="true" />
          <a>modals</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
