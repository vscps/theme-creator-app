import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import { Fragment } from "react";

export default function Color({
  color,
  themeColors,
  setThemeColors,
  handleDelete,
  id,
}) {
  const [currentColorId, setCurrentColorId] = useState(null);
  const [currentDeleteId, setCurrentDeleteId] = useState(null);

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
      <div className="button-area">
        {currentDeleteId === color.id ? (
          <Fragment>
            <div className="message">Really delete?</div>
            <Button
              type="button"
              text="Cancel"
              onClick={() => {
                setCurrentDeleteId(null);
              }}
            ></Button>
            <Button
              type="button"
              text="Delete now"
              onClick={() => {
                handleDelete(color.id);
                setCurrentDeleteId(null);
              }}
            ></Button>
          </Fragment>
        ) : (
          ""
        )}
        {/* State buttons for toggling edit and deletion modes */}
        {currentColorId === null && !currentDeleteId ? (
          <Button
            type="button"
            text="Edit"
            onClick={() => {
              setCurrentColorId(id);
            }}
          ></Button>
        ) : (
          ""
        )}
        {!currentDeleteId && currentColorId == null ? (
          <Button
            type="button"
            text="Delete"
            onClick={() => {
              setCurrentDeleteId(id);
              setCurrentColorId(null);
            }}
          ></Button>
        ) : (
          ""
        )}
        {/* Toggle EditForm in edit state only and only for the current color */}
        {themeColors.map((color) =>
          color.id === currentColorId ? (
            <Fragment key={color.id}>
              <ColorForm
                themeColors={themeColors}
                setThemeColors={setThemeColors}
                currentColorId={currentColorId}
                setCurrentColorId={setCurrentColorId}
              ></ColorForm>
            </Fragment>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
