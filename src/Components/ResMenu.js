import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuAccordian from "./MenuAccordian";

const ResMenu = () => {
  const { resId } = useParams();
  const [resShowHide, setResShowHide] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return "Loading";

  const { name, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
  const menuItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(menuItems);

  return (
    <div className="text-center">
      <h1 className=" font-bold text-2xl my-6 ">{name}</h1>
      {/* <p className=" font-bold text-lg">{cuisines.join(",")}</p> */}
      {menuItems.map((menu, index) => (
        <MenuAccordian
          key={menu?.card?.card?.title}
          menu={menu?.card?.card}
          showItem={index === resShowHide ? true : false}
          setResShowHide={() => setResShowHide(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
