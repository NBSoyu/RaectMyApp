import React from "react";
import {useState, useCallback, useEffect} from "react";
import "./ImageComponent.css";

const ImageComponent = ({image, removeHandler}) => {
  const [active, setActive] = useState(false);
  const keyDownHandler = useCallback(
    (e) => {
      (e.key.toLowerCase() === "delete" ||
        e.key.toLowerCase() === "backspace") &&
        active &&
        removeHandler(image.id);
    },
    [active]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [active]);

  return (
    <li
      className="content-Item"
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <article>
        <img
          className={`imageall ${active ? "active" : ""}`}
          src={image.url}
          alt=""
        />
      </article>
    </li>
  );
};

export default ImageComponent;
