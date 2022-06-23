import ImageComponent from "./ImageComponent/ImageComponent";
import Select from "./Select/Select";
import {useEffect, useState} from "react";
import MenuItem from "./MenuItem";
import {nanoid} from "nanoid";

function PageContent({images, setNewCategory}) {
  const variants = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Design",
      value: 1,
    },
    {
      label: "Branding",
      value: 2,
    },
    {
      label: "Illustration",
      value: 3,
    },
    {
      label: "Motion",
      value: 4,
    },
  ];

  const [currentImages, setCurrentImages] = useState(() => images.slice(0, 10));
  const [currentCategory, setCurrentCategory] = useState(() => variants[0]);

  const setPageImages = () => {
    setCurrentImages((prev) => [
      ...prev,
      ...images.slice(prev.length, prev.length + 5),
    ]);
  };

  useEffect(() => {
    setCurrentImages(() => images.slice(0, 10));
  }, [images]);

  const removeImage = (imgID) => {
    setCurrentImages((prev) => {
      return prev.filter((img) => {
        return img.id !== imgID;
      });
    });
  };

  useEffect(() => {
console.log(currentCategory)
  
  
  }, [currentCategory])
  

  return (
    <div className="content">
      <div className="buttoncategories container">
        <Select
          variants={variants}
          setNewCategory={setNewCategory}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
        <ul className="buttontable">
          {variants.map((category) => (
            <MenuItem
              categoryData={category}
              setNewCategory={setNewCategory}
              setCurrentCategory={setCurrentCategory}
              isActive={currentCategory.value === category.value}
              key={nanoid()}
            />
          ))}
        </ul>
        <div className="contentBlockImage">
          <ul className="containerimage">
            {currentImages.map((image) => (
              <ImageComponent
                image={image}
                removeHandler={removeImage}
                key={image.id}
              />
            ))}
          </ul>
        </div>
        <button className="more__img__btn" onClick={setPageImages}>
          More Images
        </button>
      </div>
    </div>
  );
}

export default PageContent;
