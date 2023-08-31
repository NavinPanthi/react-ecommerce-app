import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { MdDeleteForever } from "react-icons/md";
import { cartActions } from "../../store/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartList);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(cartActions.removeAllFromCart());
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="flex justify-center items-center h-[90vh]">
          <p className="italic text-gray-400 my-0 text-xl">
            You have no items in the cart.
          </p>
        </div>
      ) : (
        <div className="m-1">
          <div className="p-5 flex justify-between border-b-2 ">
            <p className="text-xl font-semibold">Your cart items</p>
            <button onClick={handleRemove}>
              <MdDeleteForever size="2em" />
            </button>
          </div>
          <ul className="p-4 divide-y">
            {cartItems.map((c) => (
              <li key={c.id} className="flex flex-col ">
                <CartItem item={c} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Cart;
