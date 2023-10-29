import { useEffect, useState } from "react";
import Title from "./Title";
import menu from "./data.js";
import Items from "./Items";
import Category from "./Category";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterMenus = (category) => {
    const newItems = menu.filter((item) => item.category === category);

    if (category === "all") {
      return setItems(menu);
    }

    setItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Category categories={categories} filterMenus={filterMenus} />
        <Items items={items} />
      </section>
    </main>
  );
};
export default App;
