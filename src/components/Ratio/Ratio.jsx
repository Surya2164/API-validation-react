import React, { useState } from "react";
import Input from "../input/input";
import Lable from "../lable/lable";
import Button from "../Button/Button";

function Ratio({}) {
  return (
    <>
      <input
        type="radio"
        id="html"
        name="fav_language"
        value="HTML"
        className="w-[20px]h-[20px] border-grey border-2 "
      ></input>
    </>
  );
}
export default Ratio;
