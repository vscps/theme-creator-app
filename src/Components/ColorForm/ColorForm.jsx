import { useState } from "react";
import "./ColorForm.css";
import ColorInput from "../FormInputs/ColorInput";
import { v4 as uuid } from "uuid";
import Button from "../Button/Button";
import TextInput from "../FormInputs/TextInput";
import { Fragment } from "react";
import { useEffect } from "react";

export default function ColorForm({
  themeColors,
  setThemeColors,
  currentColorId,
  setCurrentColorId,
}) {
  const [currentColor, setCurrentColor] = useState({
    hex: "#000000",
    contrastText: "#ffffff",
    role: "",
  });

  // Prefill the form fields with the current color values in edit mode
  // Compare the current color that is edited with the array of all colors to find the current color values
  useEffect(() => {
    if (currentColorId) {
      const colorToEdit = themeColors.find((c) => c.id === currentColorId);
      if (colorToEdit) {
        setCurrentColor({
          hex: colorToEdit.hex,
          contrastText: colorToEdit.contrastText,
          role: colorToEdit.role,
        });
      }
    }
  }, [currentColorId, themeColors]);

  function handleThemeColor(event) {
    event.preventDefault();
    const role = event.target.role.value;

    if (currentColorId) {
      // Edit mode: update form with existing color values
      const updatedColors = themeColors.map((color) =>
        color.id === currentColorId
          ? { ...color, ...currentColor, role }
          : color
      );
      setThemeColors(updatedColors);
      setCurrentColorId(null);
    } else {
      // Add mode: Take the default state for the currentColor, construct a new object and add it to the theme colors array
      const colorData = { id: uuid(), ...currentColor, role: role };
      setThemeColors([colorData, ...themeColors]);
    }

    // Reset the form after the editing or adding action back to its default values
    setCurrentColor({
      hex: "#000000",
      contrastText: "#ffffff",
      role: "",
    });

    event.target.reset();
  }

  return (
    <form onSubmit={handleThemeColor} className="colorForm">
      <label htmlFor="role" aria-required>
        Role
      </label>
      <TextInput
        type="text"
        name="role"
        value={currentColor.role}
        onChange={(event) =>
          setCurrentColor({ ...currentColor, role: event.target.value })
        }
        required="true"
      ></TextInput>
      {/* <ul>
        {themeColors.map((color) => (
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
                setThemeColors={setThemeColors}
                onChangeFunction={(event) =>
                  setCurrentColor({ ...currentColor, hex: event.target.value })
                }
              />
              <ColorInput
                colorName="contrastText"
                hexColor={currentColor.contrastText}
                colorDescription={"Text Contrast Color"}
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

      {currentColorId ? (
        <Fragment>
          <Button type="submit" text="Update Color"></Button>
          <Button
            type="button"
            text="Cancel editing"
            onClick={() => setCurrentColorId(null)}
          ></Button>
        </Fragment>
      ) : (
        <Button type="submit" text="Add Theme Color"></Button>
      )}
      {/* Buttons for color edition mode */}
    </form>
  );
}
