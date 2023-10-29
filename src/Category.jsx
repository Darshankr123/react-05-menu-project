import React from "react";

const Category = ({ categories, filterMenus }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <div key={category}>
            <button className="btn" onClick={() => filterMenus(category)}>
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
