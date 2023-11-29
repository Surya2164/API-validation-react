import React, { useState } from "react";
import Input from "../input/input";
import Lable from "../lable/lable";
import Button from "../Button/Button";
import Ratio from "../Ratio/Ratio";
import Modal from "./Modal";

const Modal2 = ({ modalShow, handleSubmit, setModalShow }) => {
  // console.log(modalShow, "modalShow");

  const [EmployeMax, setEmployeMax] = useState("");
  const [EmployeMin, setEmployeMin] = useState("");
  const [salaryMax, setsalaryMax] = useState("");
  const [salaryMin, setsalaryMin] = useState("");
  const [totalEmployee, settotalEmployee] = useState("");
  console.log(EmployeMax, EmployeMin, salaryMax, salaryMin, totalEmployee);

  const handleEmplyeMax = (event) => {
    setEmployeMax(event.target.value);
  };

  const handleEmplyeMin = (event) => {
    setEmployeMin(event.target.value);
  };

  const handlesalaryMax = (event) => {
    setsalaryMax(event.target.value);
  };
  const handlesalaryMin = (event) => {
    setsalaryMin(event.target.value);
  };
  const handletotalEmpoyee = (event) => {
    settotalEmployee(event.target.value);
  };

  console.log("EmployeMax", EmployeMax);
  console.log("EmployeMin", EmployeMin);
  console.log("salaryMax", salaryMax);
  console.log("salaryMin", salaryMin);
  console.log("totalEmployee", totalEmployee);

  return (
    <>
      <div
        className="bg-black	w-[100%] inset-0 top-0  h-[100%] flex justify-center"
        onClick={() => setModalShow(true)}
      >
        <div
          className={`flex justify-center w-[100px] mt-[100px] top-0  absolute ${
            modalShow ? "" : "hidden"
          }`}
        >
          <div className="flex bg-white w-[577px] h-[564px]">
            <div className="  flex flex-col w-[577px] h-[564px] gap-[24px] p-[32px]">
              <div className="flex justify-between gap-50%">
                {" Create a Job"} {"Step-2"}
              </div>

              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-row gap-[24px] w-[100%]">
                  <div className=" flex flex-col gap-1 ">
                    <div>
                      <Lable title_name="Experence" />
                    </div>
                    <div className="flex flex-row gap-[24px] ">
                      <div>
                        <Input
                          type="text"
                          handleChange={handleEmplyeMax}
                          placeholder="minimum"
                        />
                      </div>

                      <div>
                        <Input
                          type="text"
                          handleChange={handleEmplyeMin}
                          placeholder="maximum"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-[24px] w-[100%]">
                  <div className=" flex flex-col gap-1 ">
                    <div>
                      <Lable title_name="Salary" />
                    </div>
                    <div className="flex flex-row gap-[24px] ">
                      <div>
                        <Input
                          type="text"
                          handleChange={handlesalaryMax}
                          placeholder="minimum"
                        />
                      </div>
                      <div>
                        <Input
                          type="text"
                          handleChange={handlesalaryMin}
                          placeholder="maximum"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col gap-1">
                  <div>
                    <Lable title_name="Total Employee" />
                  </div>
                  <div>
                    <Input
                      type="text"
                      handleChange={handletotalEmpoyee}
                      placeholder="ex. Information Technology"
                    />
                  </div>
                </div>

                <div className="flex  flex-col">
                  <p> Apply type</p>
                  <div className="flex gap-10 mt-[5px] ">
                    <div>
                      <Ratio />
                      <Lable title_name="Quick apply" />
                    </div>
                    <div>
                      <Ratio />
                      <Lable title_name="External apply" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="inset-0">
                  <Button
                    button_name="Back"
                    className="bg-blue-500 w-[90px] h-[40px] rounded-[5px] mt-[20px] ml-[50px]"
                    onClick={() => setModalShow({ modal: true, modal2: false })}
                  />
                </div>
                <div className="">
                  <Button
                    button_name="Submit"
                    className="bg-blue-500 w-[90px] h-[40px] rounded-[5px] mt-[20px] ml-[50px]"
                    onClick={() => handleSubmit(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal2;
