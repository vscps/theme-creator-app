import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import { Fragment } from "react";

export default function Color({
  color,
  setThemeColors,
  handleDelete,
  isDeletionMode,
  setDeletionMode,
  isEditMode,
  setEditMode,
  colorSet,
  id,
}) {
  const [isVisible, setVisibility] = useState(false);
  const [currentColorId, setCurrentColorId] = useState(null);

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
        {isDeletionMode === true ? (
          <Fragment>
            <div className="message">Really delete?</div>
            <Button
              type="button"
              text="Cancel"
              onClick={() => {
                setDeletionMode(false);
              }}
            ></Button>
            <Button
              type="button"
              text="Delete now"
              onClick={() => {
                handleDelete(color.id);
              }}
            ></Button>
          </Fragment>
        ) : (
          ""
        )}
        {/* State buttons for toggling edit and deletion modes */}
        {currentColorId === null && isDeletionMode === false ? (
          <Button
            type="button"
            text="Edit"
            onClick={() => {
              // setEditMode(true);
              setCurrentColorId(id);
            }}
          ></Button>
        ) : (
          ""
        )}
        {isDeletionMode !== true && currentColorId == null ? (
          <Button
            type="button"
            text="Delete"
            onClick={() => {
              setVisibility(!isVisible);
              setDeletionMode(true);
              // setEditMode(false);
              setCurrentColorId(null);
            }}
          ></Button>
        ) : (
          ""
        )}
        {/* Toggle EditForm in edit state only and only for the current color */}
        {colorSet.map((color) =>
          color.id === currentColorId ? (
            <Fragment key={color.id}>
              <ColorForm
                colorSet={colorSet}
                setColorSet={setThemeColors}
                setThemeColors={setThemeColors}
                isDeletionMode={isDeletionMode}
                setDeletionMode={setDeletionMode}
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
