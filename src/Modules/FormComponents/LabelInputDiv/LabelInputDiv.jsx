import React from "react";

const LabelInputDiv = (props) => {
  return (
    <div className={`${props.className} flex flex-col mb-2 items-start`}>
      {props.children}
    </div>
  );
};

export default LabelInputDiv;
