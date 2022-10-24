import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./style.css";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <Modal toggleModal={toggleModal} />}
      <a
        onClick={toggleModal}
        className="hover:cursor-pointer border rounded-lg img-wrap "
      >
        <img src="https://source.unsplash.com/random" className="center" />
      </a>
    </>
  );
};

export default Card;
