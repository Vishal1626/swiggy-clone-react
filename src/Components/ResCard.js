import { useContext } from "react";
import userContext from "../utils/userContext";

const ResCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(userContext);

  const { name, cloudinaryImageId, avgRating, cusines, costForTwo, sla } =
    resData.info;

  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className=" m-4 p-4 border border-gray-10 rounded-md bg-gray-50 w-[200px] h-[350px] hover:cursor-pointer hover:w-[210px]">
        <img
          className="w-44 p-2 hover:w-48"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold"> {name}</h3>
        <h4> {cusines}</h4>
        <h5> {avgRating}⭐</h5>
        <h5> {costForTwo}</h5>
        <h5>{sla.deliveryTime} min</h5>
        <h5> {loggedInUser}</h5>
      </div>
    </>
  );
};

export const PromotedResCard = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-gray-900 rounded-lg p-2 m-2">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
