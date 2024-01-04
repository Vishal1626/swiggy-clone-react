import { useState } from "react";
import AccordianMenuList from "./AccordianMenuList";

const MenuAccordian = ({ menu, showItem, setResShowHide }) => {
  //const [showItem, setShowItems] = useState(showItem);
  const handleClick = () => {
    setResShowHide();
  };
  return (
    <div className="text-center w-6/12 m-auto py-2 my-4 shadow-lg rounded-md bg-gray-200 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="px-2 font-bold">
          {menu.title} ({menu.itemCards.length})
        </span>
        {showItem ? (
          <span className="px-4">🔼</span>
        ) : (
          <span className="px-4">🔽</span>
        )}
      </div>
      {showItem && <AccordianMenuList items={menu.itemCards} />}
    </div>
  );
};

export default MenuAccordian;
