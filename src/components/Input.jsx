import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input {...rest} id={name} name={name} className={error && "invalid"} />
      <span className="helper-text">{error}</span>
    </div>
  );
};

export default Input;
