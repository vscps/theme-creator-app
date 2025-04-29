import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [themeColors, setThemeColors] = useState(initialColors);
  return (
    <>
      <h1>Theme Creator</h1>

      {themeColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
      <ColorForm
        colorSet={themeColors}
        setColorSet={setThemeColors}
      ></ColorForm>
    </>
  );
}

export default App;
