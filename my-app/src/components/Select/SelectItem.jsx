import React from "react";
import "./SelectItem.css";

const SelectItem = ({selectData, setVariant, setActive, setNewCategory}) => {
  return (
    <div
      className="select__choose"
      onClick={() => {
        setVariant(selectData);
        setActive(false);
        setNewCategory(selectData.value);
      }}
    >
      {selectData.label}
    </div>
  );
};

export default SelectItem;
