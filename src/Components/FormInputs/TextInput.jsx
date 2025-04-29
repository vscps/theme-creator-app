import { Fragment } from "react";
import "./TextInput.css";

export default function TextInput({
  type,
  value,
  name,
  onChange,
  label,
  required,
}) {
  const isRequired = required;
  isRequired == "true" ? "required" : "";
  return (
    <Fragment>
      {label !== "" ? <label htmlFor={name}>{label}</label> : ""}
      {required == "true" ? (
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          required
        ></input>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        ></input>
      )}
    </Fragment>
  );
}
