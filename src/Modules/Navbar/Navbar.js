import { Disclosure } from "@headlessui/react";
import Auth from "../Auth/Auth";

import Login from "../Auth/Auth";
import Button from "../FormComponents/Button/Button";

const navigation = [
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="bg-white">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className=" lg:px-5   ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center justify-center sm:items-stretch sm:justify-start h-full">
                  <div className="cursor-pointer flex flex-shrink-0 items-center">
                    <h1 className="font-bold lg:text-2xl">OpenFrontend</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 h-full">
                      {navigation.map((item) => (
                        <div
                          className={classNames(
                            item.current
                              ? "border-b-4 border-indigo-400"
                              : "border-none",
                            "h-full flex items-center justify-center"
                          )}
                        >
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " text-black"
                                : "text-gray-400   hover:text-white",
                              "px-3 py-2  text-md font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                    type="button"
                    className="rounded-full bg-white-800 p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button> */}

                  {/* <Menu as="div" className="relative ml-3 z-40">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UserCircleIcon className=" inline-flex h-5 items-center mr-1 w-5" />{" "}
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <hr />
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <BookOpenIcon className=" inline-flex h-5 items-center w-5 mr-1" />{" "}
                              Saved
                            </a>
                          )}
                        </Menu.Item>
                        <hr />
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <DocumentIcon className=" inline-flex h-5 items-center mr-1 w-5" />{" "}
                              Uploads
                            </a>
                          )}
                        </Menu.Item>
                        <hr />
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <TagIcon className=" inline-flex h-5 items-center mr-1 w-5" />{" "}
                              Category
                            </a>
                          )}
                        </Menu.Item>
                        <hr />
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <ArrowLeftCircleIcon className=" inline-flex h-5 items-center mr-1 w-5" />{" "}
                              Signout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                  <Auth />
                  <Button className="text-white bg-red-600">
                    Share your work
                  </Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "border-b-4 border-indigo-500 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
