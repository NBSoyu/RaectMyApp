import React from "react";

const MenuItem = ({categoryData, setNewCategory,setCurrentCategory, isActive}) => {
  return (
    <li className={`contenttabs ${isActive ? 'active' : ''}`} onClick={() => {
        setCurrentCategory(categoryData)
        setNewCategory(categoryData.value)
        }}>
      {categoryData.label}
    </li>
  );
};

export default MenuItem;
