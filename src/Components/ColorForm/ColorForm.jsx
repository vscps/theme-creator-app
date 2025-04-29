import { useState } from "react";
import "./ColorForm.css";
import ColorInput from "./ColorInput";
import { v4 as uuid } from "uuid";

export default function ColorForm({ colorSet, setColorSet }) {
  const [currentColor, setCurrentColor] = useState({
    hex: "#000000",
    contrastText: "#ffffff",
    role: "",
  });

  function handleAddThemeColor(event) {
    event.preventDefault();
    const role = event.target.role.value;
    const colorData = { id: uuid(), ...currentColor, role: role };

    setColorSet([colorData, ...colorSet]);

    // Reset the current color fields after adding
    setCurrentColor({
      hex: "#000000",
      contrastText: "#ffffff",
      role: "",
    });

    event.target.role.value = "";
  }

  return (
    <form onSubmit={handleAddThemeColor} className="colorForm">
      <label htmlFor="role" aria-required>
        Role
      </label>
      <input type="text" name="role" required></input>
      {/* <ul>
        {colorSet.map((color) => (
          <li key="newColor">
            <ColorInput colorRole={color.role} hexColor={color.hex} />
            <ColorInput
              colorRole="contrastText"
              hexColor={color.contrastText}
            />
          </li>
        ))}
      </ul> */}
      <ul>
        {
          <li key="newColor">
            <ColorInput
              colorName="hex"
              hexColor={currentColor.hex}
              colorDescription={"Primary Color"}
              onChangeFunction={(event) =>
                setCurrentColor({ ...currentColor, hex: event.target.value })
              }
            />
            <ColorInput
              colorName="contrastText"
              hexColor={currentColor.contrastText}
              colorDescription={"Text Contrast Color"}
              onChangeFunction={(event) =>
                setCurrentColor({
                  ...currentColor,
                  contrastText: event.target.value,
                })
              }
            />
          </li>
        }
      </ul>

      <button>Add Theme Color</button>
    </form>
  );
}
