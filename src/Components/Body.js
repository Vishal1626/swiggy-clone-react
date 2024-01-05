import { useEffect, useState, useContext } from "react";
import ResCard, { PromotedResCard } from "./ResCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";

const Body = () => {
  const [restaurantData, setRestauratsData] = useState(null);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState(null);
  const [searchText, setSearchText] = useState();
  const [filterBtn, setFilterBtn] = useState("Filter");
  const RestaurantCardWithPromotion = PromotedResCard(ResCard);

  const { loggedInUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchAPIData();
  }, []);

  const fetchAPIData = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1253629&lng=72.99920130000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await response.json();
    setRestauratsData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(restaurantData);
    setFilteredRestaurantData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantData == null && filteredRestaurantData == null)
    return <Shimmer />;
  return (
    <div className="body">
      <div className="m-2 p-2">
        <input
          type="text"
          value={searchText}
          className="m-2 border border-solid border-gray-600 rounded-md"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="m-2  border border-solid border-gray-700 rounded-md w-14 bg-green-300 items-center"
          onClick={() => {
            const filteredData = restaurantData.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestaurantData(filteredData);
          }}
        >
          Search
        </button>
        <button
          className="m-2 border border-solid border-gray-700 rounded-md w-14 bg-blue-200 items-center"
          onClick={() => {
            if (filterBtn == "Filter") {
              const filterRes = restaurantData.filter((res) => {
                return res.info.avgRating >= 4.4;
              });
              setFilteredRestaurantData(filterRes);
              setFilterBtn("Reset");
            } else {
              setFilteredRestaurantData(restaurantData);
              setFilterBtn("Filter");
            }
          }}
        >
          {filterBtn}
        </button>
        <input
          type="text"
          value={loggedInUser}
          className="m-2 border border-solid border-gray-600 rounded-md"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantData.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resmenu/" + restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <RestaurantCardWithPromotion resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
