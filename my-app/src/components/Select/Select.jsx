import React from "react";
import {useState} from "react";
import "./Select.css";
import SelectItem from "./SelectItem";

const Select = ({
  variants,
  currentCategory,
  setCurrentCategory,
  setNewCategory,
}) => {
  const [active, setActive] = useState(false);

  const onClickHanlder = () => {
    !active && setActive((prev) => !prev);
  };

  return (
    <div className="select" onClick={onClickHanlder}>
      {!active && (
        <div className="select__body">
          <span>{currentCategory.label}</span>
        </div>
      )}
      {active && (
        <div className="select__inner">
          {variants.map(
            (variant) =>
              variant.value !== null && (
                <SelectItem
                  selectData={variant}
                  setVariant={setCurrentCategory}
                  setActive={setActive}
                  setNewCategory={setNewCategory}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
