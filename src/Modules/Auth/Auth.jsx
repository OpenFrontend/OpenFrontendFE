import React, { useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "../Modal/Modal.module.css";

import api from "../../api";

console.log(api.endPoint);
const Login = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleModal = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(!isRegisterOpen);
  };
  return (
    <div>
      <button
        data-keyboard="false"
        data-backdrop="static"
        onClick={() => setIsLoginOpen(!isLoginOpen)}
      >
        Login
      </button>
      {isLoginOpen && (
        <div className="sticky  rounded-sm w-full z-50 bg-white top-0">
          <div
            className={`${styles.darkBG}`}
            onClick={() => setIsLoginOpen(false)}
          />
          <div className={styles.centered}>
            <div className={`${styles.modal}`}>
              <button
                className={styles.closeBtn}
                onClick={() => setIsLoginOpen(false)}
              >
                <XMarkIcon
                  // onClick={toggleSideBar}
                  className="h-8 w-8 mx-1 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
              <div
                className={`${styles.modalContent} items-center h-full flex flex-row-reverse justify-start`}
              >
                <div className="hidden lg:inline-flex w-2/4 p-0 h-full bg-pink-600 border rounded-2xl">
                  <h1 className="m-auto text-5xl text-white">Open Frontend</h1>
                </div>
                <div className="lg:w-2/4 w-full lg:px-10 px-5 lg:py-10 py-5">
                  <form className="lg:px-5 lg:py-5">
                    <h2 className="text-2xl font-bold py-5">
                      Login your account
                    </h2>

                    <div className="flex flex-col mb-2 items-start">
                      <label className="font-thin text-md my-1 ">Email</label>
                      <input
                        className="bg-gray-100 outline-none font-thin px-3 py-2 w-full"
                        placeholder="Email Address"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col mb-2 items-start">
                      <label className="font-thin text-md my-1 ">
                        Password
                      </label>
                      <input
                        className="bg-gray-100 outline-none font-thin px-3 py-2 w-full"
                        type="password"
                        placeholder="password"
                      />
                    </div>
                    <button
                      type="button"
                      className=" rounded-md bg-pink-600 px-3 py-2 text-gray-100 font-bold hover:text-gray-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full my-2"
                    >
                      Register
                    </button>
                    <a
                      onClick={toggleModal}
                      // to="/register"
                      className="font-thin underline text-black text-md"
                    >
                      Already have an account? Login
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
      {isRegisterOpen && (
        <div className="sticky  rounded-sm w-full z-50 bg-white top-0">
          <div
            className={`${styles.darkBG}`}
            onClick={() => setIsRegisterOpen(false)}
          />
          <div className={styles.centered}>
            <div className={`${styles.modal}`}>
              <button
                className={styles.closeBtn}
                onClick={() => setIsRegisterOpen(false)}
              >
                <XMarkIcon
                  // onClick={toggleSideBar}
                  className="h-8 w-8 mx-1 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
              <div
                className={`${styles.modalContent} items-center h-full flex justify-start`}
              >
                <div className="hidden lg:inline-flex h-full w-2/4 p-0 bg-pink-600 border rounded-2xl">
                  <h1 className="m-auto text-5xl text-white">Open Frontend</h1>
                </div>
                <div className="lg:w-2/4 w-full lg:px-10 px-5 lg:py-10 py-5">
                  <form className="lg:px-5 lg:py-5">
                    <h2 className="text-2xl font-bold py-5">
                      Create your account
                    </h2>
                    <div className="flex flex-col mb-2 items-start">
                      <label className="font-thin text-md my-1">
                        Full Name
                      </label>
                      <input
                        placeholder="Full Name"
                        className="bg-gray-100 outline-none font-thin text-md px-3 py-2 w-full"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col mb-2 items-start">
                      <label className="font-thin text-md my-1 ">Email</label>
                      <input
                        className="bg-gray-100 outline-none font-thin px-3 py-2 w-full"
                        placeholder="Email Address"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col mb-2 items-start">
                      <label className="font-thin text-md my-1 ">
                        Password
                      </label>
                      <input
                        className="bg-gray-100 outline-none font-thin px-3 py-2 w-full"
                        type="password"
                        placeholder="password"
                      />
                    </div>
                    <button
                      type="button"
                      className=" rounded-md bg-pink-600 px-3 py-2 text-gray-100 font-bold hover:text-gray-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 w-full my-2"
                    >
                      Register
                    </button>
                    <a
                      onClick={toggleModal}
                      // to="/register"
                      className="font-thin underline text-black text-md"
                    >
                      Already have an account? Login
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Login;
