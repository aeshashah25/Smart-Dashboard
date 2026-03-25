import React from "react";

const Input = ({ name, placeholder, value, onChange, error }) => {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 w-full rounded"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;