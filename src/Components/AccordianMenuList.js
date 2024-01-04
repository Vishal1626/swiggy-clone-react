const AccordianMenuList = ({ items }) => {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-b-2 border-gray-300 flex justify-between"
        >
          <div className=" w-11/12">
            <div className="font-bold text-sm">
              {item.card.info.isVeg === 1 ? (
                <img
                  className="w-4"
                  src="data:image/png;base64,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"
                />
              ) : (
                <img
                  className="w-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png"
                />
              )}
              <span className="">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="flex flex-wrap p-2">
            <img
              className="w-28 rounded-lg border border-gray-300"
              src={CDN_URL + item.card.info.imageId}
            />
            <button className=" ml-6 mt-16 p-2 absolute text-green-500 font-bold border border-gray-700 bg-white rounded-lg ">
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianMenuList;
