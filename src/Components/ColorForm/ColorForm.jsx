import { useState } from "react";
import "./ColorForm.css";
import ColorInput from "../FormInputs/ColorInput";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import TextInput from "../FormInputs/TextInput";
import { Fragment } from "react";

export default function ColorForm({
  colorSet,
  setColorSet,
  setThemeColors,
  isDeletionMode,
  setDeletionMode,
  currentColorId,
  setCurrentColorId,
}) {
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
      <p>Current Color id: {currentColorId}</p>
      <label htmlFor="role" aria-required>
        Role
      </label>
      <TextInput type="text" name="role" required="true"></TextInput>
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
      <Fragment>
        <ul>
          {
            <li key="newColor">
              <ColorInput
                colorName="hex"
                hexColor={currentColor.hex}
                colorDescription={"Primary Color"}
                setDeletionMode={setDeletionMode}
                isDeletionMode={isDeletionMode}
                setThemeColors={setThemeColors}
                onChangeFunction={(event) =>
                  setCurrentColor({ ...currentColor, hex: event.target.value })
                }
              />
              <ColorInput
                colorName="contrastText"
                hexColor={currentColor.contrastText}
                colorDescription={"Text Contrast Color"}
                setDeletionMode={setDeletionMode}
                isDeletionMode={isDeletionMode}
                setThemeColors={setThemeColors}
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
      </Fragment>

      <Button
        type="submit"
        text={currentColorId !== null ? "Update Color" : "Add Theme Color"}
      ></Button>
      {/* Cancel-Button for cancelling color edition mode */}
      {currentColorId !== null ? (
        <Button
          type="button"
          text="Cancel editing"
          onClick={() => setCurrentColorId(null)}
        ></Button>
      ) : (
        ""
      )}
    </form>
  );
}
