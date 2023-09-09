import React from "react";
import "./textField.css";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div>
      <label htmlFor="">{label}:</label>
      <br />
      <input {...inputProps} onChange={onChange} value={value} />
    </div>
  );
};

export default TextField;
