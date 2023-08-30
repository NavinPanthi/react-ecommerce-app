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
    <div>
      <div>
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
  );
};
export default Cart;
