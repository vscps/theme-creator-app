import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // Save the current themeColors state in local storage and read it the next time you visit the page. If the local storage is empty, use the initial colors as fallback.
  const [themeColors, setThemeColors] = useState(() => {
    const storedColors = localStorage.getItem("savedThemeColors");
    return storedColors ? JSON.parse(storedColors) : initialColors;
  });

  // Trigger saving of colors every time the themColors Array updates.
  useEffect(() => {
    localStorage.setItem("savedThemeColors", JSON.stringify(themeColors));
  }, [themeColors]);

  const numColors = themeColors.length;

  function handleDeleteColor(id) {
    setThemeColors(themeColors.filter((color) => color.id !== id));
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
            themeColors={themeColors}
            setThemeColors={setThemeColors}
            id={color.id}
          />
        );
      })}
      {/* Add Form below list of colors */}
      <ColorForm
        themeColors={themeColors}
        setThemeColors={setThemeColors}
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
