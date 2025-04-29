import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function Color({ color }) {
  const [isVisible, setVisibility] = useState(false);
  console.log(isVisible);
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <div className="deletion-area">
        <div className={`message ${isVisible ? "" : "hidden"}`}>
          Really delete?
        </div>
        <Button
          type="button"
          text="Cancel"
          className={isVisible ? "" : "hidden"}
          onClick={() => setVisibility(!isVisible)}
        ></Button>
        <Button
          type="button"
          text="Delete"
          onClick={() => setVisibility(!isVisible)}
        ></Button>
      </div>
    </div>
  );
}
