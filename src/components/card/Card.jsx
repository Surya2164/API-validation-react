import React from "react";
import img from "../../../src/assets/img.png";
import Button from "../Button/Button";
const Card = (item) => {
  console.log("itemCard", item);
  return (
    <>
      <div className="w-[500px] h-[320px] bg-white rounded-[10px]">
        <div className="w-[100%] h-[288px] pl-[20px] pt-[16px] pb-[16px] gap-[24px] flex flex-col ">
          <div className="flex">
            <div>{<img className="img" src={img} alt="img" />}</div>

            <div className="w-[301px] h-[80px] pl-[8px]">
              <h1 className="text-[24px]">{item?.item?.applyType}</h1>
              <h2 className="text-[16px]">{item?.item?.companyName}</h2>
              <h3 className=" text-[16px] text-[#7A7A7A]">
                {item?.item?.industry}
                {item?.item?.location}
              </h3>
            </div>
          </div>
          <div className="ml-[50px] w-[301] h-[120] text-[16px] pl-[8px]">
            <p>part-tiem ({item?.item?.remotetype})</p>
            <p>
              Experence ({item?.item?.minimumExperience}-
              {item?.item?.maximumExperience} years)
            </p>
            <p>
              INR ($){item?.item?.minimumSalary}-$
              {item?.item?.maximumSalary}
            </p>
            <p>{item?.item?.totalEmployee}Employees</p>
          </div>
          <div>
            <Button
              button_name="Apply Now"
              className="bg-blue-500 w-[90px] h-[40px] rounded-[5px] mt-[20px] ml-[50px]"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
