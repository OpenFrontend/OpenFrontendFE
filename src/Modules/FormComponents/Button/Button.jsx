import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${props.className} px-3 py-2 hover:opacity-50 rounded-lg mx-2 my-2 font-bold`}
    >
      {props.children}
    </button>
  );
};

export default Button;
