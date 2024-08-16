import React from "react";

const Input = ({ htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder="Judul film..."
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </>
  );
};

export default Input;
