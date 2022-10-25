import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      className={`${props.className} bg-gray-100 outline-none rounded-md font-thin px-3 py-2 w-full`}
    />
  );
};

export default Input;
