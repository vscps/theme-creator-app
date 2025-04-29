import { Fragment } from "react";
import "./ColorInput.css";

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
      <input type="text" value={hexColor} onChange={onChangeFunction}></input>
    </Fragment>
  );
}
