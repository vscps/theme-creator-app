import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [themeColors, setThemeColors] = useState(initialColors);
  const [isDeletionMode, setDeletionMode] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const numColors = themeColors.length;

  function handleDeleteColor(id) {
    setDeletionMode(false);
    setThemeColors(themeColors.filter((color) => color.id !== id));
  }

  function handleEditColor(id) {
    setEditMode(true);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      {/* Iterate through color array and print each color */}
      {themeColors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            handleDelete={handleDeleteColor}
            setDeletionMode={setDeletionMode}
            isDeletionMode={isDeletionMode}
            isEditMode={isEditMode}
            setEditMode={setEditMode}
            colorSet={themeColors}
            id={color.id}
          />
        );
      })}
      {/* Add Form below list of colors */}
      <ColorForm
        colorSet={themeColors}
        setColorSet={setThemeColors}
        setDeletionMode={setDeletionMode}
        isDeletionMode={isDeletionMode}
        isEditMode={isEditMode}
        setEditMode={setEditMode}
      ></ColorForm>
      {numColors == 0 ? (
        <p>No colors available. Start by adding a color.</p>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
