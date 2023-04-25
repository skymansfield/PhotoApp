import React from "react";
import "../components/Forminput.css"

const FormInput = ({name, type, value, handleChange, labelText}) => {
  return (
    <div className="form">
      <label className="label" htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
