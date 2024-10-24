import React, { useState } from "react";

export default function Inputbox(props) {
  const { label, type, Placeholder, htmlfor, w, require, onChange,value, name } = props;

  return (
    <div className="frm-grp flex flex-col gap-2 ">
      <label htmlFor={htmlfor}>{label}</label>
      <input
        type={type}
        placeholder={Placeholder}
        className={`py-2 px-3 rounded-md border border-opacity-70  ${w} `}
        required={require}
        value={value}
        onChange={onChange}
        name={name}
           
      />
    </div>
  );
}
