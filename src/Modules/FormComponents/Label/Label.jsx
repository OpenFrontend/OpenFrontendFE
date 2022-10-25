import React from "react";

const Label = (props) => {
  return (
    <label className={`${props.className} font-thin text-md my-1`}>
      {props.children}
    </label>
  );
};

export default Label;
