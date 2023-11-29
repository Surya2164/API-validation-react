import React from "react";
import Button from "../Button/Button";
function Lable({ title_name }) {
  return (
    <>
      <label for="html" className="">
        {title_name}
      </label>
    </>
  );
}
export default Lable;
