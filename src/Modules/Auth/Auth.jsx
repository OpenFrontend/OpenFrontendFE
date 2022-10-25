import React, { useState } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "../Modal/Modal.module.css";

import api from "../../api";
import { useSelector } from "react-redux";
import Button from "../FormComponents/Button/Button";
import Input from "../FormComponents/Input/Input";
import Label from "../FormComponents/Label/Label";
import LabelInputDiv from "../FormComponents/LabelInputDiv/LabelInputDiv";

// console.log(api.endPoint);
const Auth = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleModal = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(!isRegisterOpen);
  };

  const handleChange = () => {};
  return (
    <div>
      <Button onClick={() => setIsLoginOpen(!isLoginOpen)}>Login</Button>
      {isLoginOpen && (
        <div className="sticky  rounded-sm w-full z-50 bg-white top-0">
          <div
            className={`${styles.darkBG}`}
            onClick={() => setIsLoginOpen(false)}
          />
          <div className={styles.centered}>
            <div className={`${styles.modal}`}>
              <Button
                className={styles.closeBtn}
                onClick={() => setIsLoginOpen(false)}
              >
                <XMarkIcon
                  // onClick={toggleSideBar}
                  className="h-8 w-8 mx-1 cursor-pointer"
                  aria-hidden="true"
                />
              </Button>
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

                    <LabelInputDiv>
                      <Label>Email</Label>
                      <Input
                        className=""
                        placeholder="Email Address"
                        type="email"
                        name=""
                        value=""
                        onChange={handleChange}
                      />
                    </LabelInputDiv>

                    <LabelInputDiv>
                      <Label>Password</Label>
                      <Input type="password" placeholder="password" />
                    </LabelInputDiv>

                    <Button
                      type="button"
                      className="bg-pink-600 text-gray-100 w-full"
                    >
                      Login
                    </Button>

                    <a
                      onClick={toggleModal}
                      className="font-thin underline text-black text-md"
                    >
                      Don't have an account? Register
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
              <Button
                className={styles.closeBtn}
                onClick={() => setIsRegisterOpen(false)}
              >
                <XMarkIcon
                  className="h-8 w-8 mx-1 cursor-pointer"
                  aria-hidden="true"
                />
              </Button>
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

                    <LabelInputDiv>
                      <Label>Full Name</Label>
                      <Input placeholder="Full Name" type="text" />
                    </LabelInputDiv>

                    <LabelInputDiv>
                      <Label>Email</Label>
                      <Input placeholder="Email Address" type="email" />
                    </LabelInputDiv>

                    <LabelInputDiv>
                      <Label>Password</Label>
                      <Input type="password" placeholder="password" />
                    </LabelInputDiv>

                    <Button
                      type="button"
                      className=" bg-pink-600 text-gray-100 w-full"
                    >
                      Register
                    </Button>
                    <a
                      onClick={toggleModal}
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

export default Auth;
