import React from "react";

function Input({
  type,
  className,
  placeholder,
  error,
  handleChange,
  value,
  ratio,
}) {
  return (
    <>
      <input
        value={value}
        name={ratio}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={`"px-3 py-2 w-full rounded-[5px] border-solid border-2 p-8 12" ${className}`}
      ></input>

      <p>{error}</p>
    </>
  );
}
export default Input;

// postdata = {
//   applyType: title,
//   companyName: companyName,
//   id: industry,
//   industry: industry,
//   location: joblocation,
//   remote: remote,
//   maximumExperience: maximumExperience,
//   maximumSalary: maximumSalary,
//   minimumExperience: minimumExperience,
//   minimumSalary: minimumSalary,
//   totalEmployee: totalEmployee,
// };
// console.log("postdata");
