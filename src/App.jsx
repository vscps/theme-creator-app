import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [themeColors, setThemeColors] = useState(initialColors);

  function handleDeleteColor(id) {
    setThemeColors(themeColors.filter((color) => color.id !== id));
  }
  return (
    <>
      <h1>Theme Creator</h1>

      {themeColors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            handleDelete={handleDeleteColor}
          />
        );
      })}
      <ColorForm
        colorSet={themeColors}
        setColorSet={setThemeColors}
      ></ColorForm>
    </>
  );
}

export default App;
