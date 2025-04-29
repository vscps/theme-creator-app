import { Fragment } from "react";
import "./ColorInput.css";
import TextInput from "./TextInput";

export default function ColorInput({
  colorName,
  hexColor,
  colorDescription,
  onChangeFunction,
}) {
  return (
    <Fragment>
      <label htmlFor={colorName}>{colorDescription}</label>
      <input
        type="color"
        id={colorName}
        name={colorName}
        value={hexColor}
        onChange={onChangeFunction}
      />
      <TextInput
        type="text"
        value={hexColor}
        onChange={onChangeFunction}
      ></TextInput>
    </Fragment>
  );
}
