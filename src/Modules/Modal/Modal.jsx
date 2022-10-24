import React from "react";
import styles from "../Modal/Modal.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = (props) => {
  return (
    <>
      <div className="sticky  rounded-sm w-full z-50 bg-white top-0">
        <div className={`${styles.darkBG}`} />
        <div className={styles.centered}>
          <div className={`${styles.modal}`}>
            <button className={styles.closeBtn} onClick={props.toggleModal}>
              <XMarkIcon
                onClick={props.toggleModal}
                className="h-8 w-8 mx-1 cursor-pointer"
                aria-hidden="true"
              />
            </button>
            <div
              className={`${styles.modalContent} items-center h-full flex justify-start`}
            ></div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Modal;
