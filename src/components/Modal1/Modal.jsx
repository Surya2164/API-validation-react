import React, { useState } from "react";
import Input from "../input/input";
import Lable from "../lable/lable";
import Button from "../Button/Button";
import Modal2 from "./Modal2";

const Modal = ({ modalShow, handleNext, setModalShow }) => {
  console.log(modalShow, "modalShow");
  const [BackModal, setBackModal] = useState([]);

  const [modal2, setModal2] = useState(false);
  const [jobTitle, setjobTitle] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [Industry, setIndustry] = useState("");
  const [Location, setLocation] = useState("");
  const [remotetype, setremotetype] = useState("");
  console.log(jobTitle, companyName, Industry, Location, remotetype);
  const [form, setform] = useState({
    jobTitle: "",
    companyName: "",
    Industry: "",
    Location: "",
    remotetype: "",
  });

  const handleJobTitle = (event) => {
    setjobTitle(event.target.value);
  };

  const handlecomapanyName = (event) => {
    setcompanyName(event.target.value);
  };
  const handleIndustry = (event) => {
    setIndustry(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleremoteType = (event) => {
    setremotetype(event.target.value);
  };

  console.log("jobTitle", jobTitle);
  console.log("companyName", companyName);
  console.log("Industry", Industry);
  console.log("location", location);
  console.log("remotetype", remotetype);
  /* {
//   jobTitle: jobTitle,
//   companyName: companyName,
//   Industry: Industry,
//   Location: Location,
//   remotetype: remotetype
// };
setJobTitle('dasdasdasd")
  {
      jobTitle: "",
      companyName: "",
      Industry: "",
      Location: "",
      remotetype: "",
    }
    
setForm()


*/
  return (
    <>
      <div className="flex">
        <div
          className="bg-black w-[100%] z-4 inset-0 top-0 left-[0%] h-[100%] flex justify-center"
          onClick={() => setModalShow(false)}
        >
          <div
            className={` flex justify-center w-[100px] mt-[100px] top-0  absolute ${
              modalShow ? " " : "hidden"
            }`}
          >
            <div className="flex bg-white w-[577px] h-[564px]">
              <div className="  flex flex-col p-[32px] w-[577px] h-[564px] gap-[24px] ">
                <div className="flex justify-between">
                  {" Create a Job"} {"Step-1"}
                </div>

                <div className="flex flex-col gap-[24px]">
                  <div className=" flex flex-col gap-1">
                    <div>
                      <Lable title_name="job title*" />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="ex. UX UI Designer"
                        handleChange={handleJobTitle}
                        value={jobTitle}
                      />
                    </div>
                  </div>

                  <div className=" flex flex-col gap-1">
                    <div>
                      <Lable title_name="company name*" />
                    </div>
                    <div>
                      <Input
                        type="text"
                        handleChange={handlecomapanyName}
                        value={companyName}
                        placeholder="ex. Google"
                      />
                    </div>
                  </div>

                  <div className=" flex flex-col gap-1">
                    <div>
                      <Lable title_name="Industry*" />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="ex. Information Technology"
                        handleChange={handleIndustry}
                        value={Industry}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row gap-[24px] ">
                    <div className=" flex flex-col gap-1 w-[300px]">
                      <div>
                        <Lable title_name="Location*" />
                      </div>
                      <div>
                        <Input
                          type="text"
                          placeholder="ex.Chennai"
                          handleChange={handleLocation}
                          value={Location}
                        />
                      </div>
                    </div>

                    <div className=" flex flex-col gap-1 w-[300px]">
                      <div>
                        <Lable title_name="Remote type*" />
                      </div>
                      <div>
                        <Input
                          type="text"
                          placeholder="ex. In-office"
                          handleChange={handleremoteType}
                          value={remotetype}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-[10px] ">
                  <div className="inset-0">
                    <Button
                      button_name="Back"
                      className="bg-blue-500 w-[90px] h-[40px] rounded-[5px] mt-[20px] ml-[50px]"
                      onClick={() => setModalShow(true)}
                    />
                  </div>
                  <div className="">
                    <Button
                      button_name="Next"
                      className="bg-blue-500 w-[90px] h-[40px] rounded-[5px] mt-[20px] ml-[50px]"
                      onClick={() => handleNext(true)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
