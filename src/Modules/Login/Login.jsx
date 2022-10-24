import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";

import styles from "../Modal/Modal.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Login</button>
      {isOpen && (
        <div className="sticky  rounded-sm w-full z-50 bg-white top-0">
          <div
            className={`${styles.darkBG}`}
            onClick={() => setIsOpen(false)}
          />
          <div className={styles.centered}>
            <div className={`${styles.modal}`}>
              <button
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <XMarkIcon
                  // onClick={toggleSideBar}
                  className="h-8 w-8 mx-1 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
              <div
                className={`${styles.modalContent} flex justify-start h-full `}
              >
                <div className="w-2/4 p-0 flex bg-pink-600 border rounded-2xl">
                  <h1 className="m-auto text-5xl text-white">Open Frontend</h1>
                </div>
                <div className="w-2/4 px-10 py-10">
                  <form className="px-5 py-5">
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
                      Login
                    </button>
                    <Link
                      to="/register"
                      className="font-thin underline text-black text-md"
                    >
                      Don't have an account? Register
                    </Link>
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
