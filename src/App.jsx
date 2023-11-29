import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import img from "../src/assets/img.png";
import Card from "../src/components/card/Card";
import "./index.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal1/Modal";
import Modal2 from "./components/Modal1/Modal2";

function App() {
  const [modal, setModal] = useState(false);
  const [modalShow, setModalShow] = useState({ modal: false, modal2: false });
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    fetch("https://6530d94e6c756603295f269f.mockapi.io/jobs")
      .then((res) => res.json())
      .then((val) => {
        setjobs(val);
      });
  }, []);
  console.log("jobs", jobs);

  const handleNext = (state) => {
    console.log("handle Next", state);
    if (state) {
      setModalShow({ model: false, modal2: true });
    }
  };

  const handleSubmit = () => {
    console.log("handle Submit");
    setModalShow({ model: false, modal2: false });
  };

  return (
    <>
      <div className="bg-gray-200 w-[100wh]">
        <div
          className="bg-red-300 w-[100%] h-[50px] flex fixed top-0"
          style={{ zIndex: 2 }}
        >
          <h1 className="text-[24px] w-[50%]">Surya prakash </h1>
          <div className=" w-[100%] mt-[5px] grid justify-items-end">
            <Button
              button_name="apply here"
              className="bg-blue-200 w-[100px] h-[40px] rounded-[5px] "
              onClick={() => setModalShow({ modal: true, modal2: false })}
            />
          </div>
        </div>
        <div
          className={` ${
            modalShow?.modal2 || modalShow?.modal
              ? "flex opacity-20 fixed overflow-hidden "
              : ""
          }grid grid-cols-2 grid-row-2 gap-7 w-[100%] mt-[50px] place-item-center ml-[80px]`}
        >
          {jobs?.map((item) => (
            <Card item={item} />
          ))}
        </div>
        <Modal
          modalShow={modalShow.modal}
          setModalShow={setModalShow}
          handleNext={handleNext}
        />
        <Modal2
          modalShow={modalShow.modal2}
          setModalShow={setModalShow}
          handleSubmit={handleSubmit}
        />

        {/* <Header className="bg-blue"></Header> */}
      </div>
    </>
  );
}

export default App;
