import React from "react";
import { categories } from "../../util/Data";

const Filters = () => {
  const [selected, setSelected] = React.useState<string>("Discover");
  return (
    <div className="flex justify-evenly w-screen  flex-wrap">
      {categories.map((item, i) => (
        <div
          key={i}
          className={`${
            selected === item.name
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } rounded-full px-4 py-2`}
          onClick={() => setSelected(item.name)}
        >
          <h1 className="text-center text-sm whitespace-nowrap">{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Filters;
