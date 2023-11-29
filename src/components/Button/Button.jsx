import React from "react";
// import lable from './lable/Lable.jsx'
function Button({ button_name, className, onClick, ratio_button }) {
  return (
    <>
      <button className={className} onClick={onClick} ratio={ratio_button}>
        {button_name}
      </button>
    </>
  );
}
export default Button;
