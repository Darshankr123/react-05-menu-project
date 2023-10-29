import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items }) => {
  //   console.log(items);

  return (
    <section className="section-center">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Items;
