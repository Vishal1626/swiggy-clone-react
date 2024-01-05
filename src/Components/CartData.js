import { useSelector, useDispatch } from "react-redux";
import AccordianMenuList from "./AccordianMenuList";
import { clearCart } from "../utils/cartSlice";

const CartData = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-6 m-6">
      <div className="flex justify-between w-6/12 m-auto">
        <h1 className="font-bold text-xl pl-20 ml-80"> Cart</h1>
        {cart.length > 0 && (
          <button
            className="m-2 border border-solid border-gray-700 rounded-md w-20 bg-green-300 items-center"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        )}
      </div>
      {cart.length === 0 ? (
        <h1 className="p-2 m-2">
          Your cart is empty. Please add items to the cart!
        </h1>
      ) : (
        <div className="w-6/12 m-auto border border-gray-400 p-2">
          <AccordianMenuList items={cart} addBtn={false} />
        </div>
      )}
    </div>
  );
};

export default CartData;
