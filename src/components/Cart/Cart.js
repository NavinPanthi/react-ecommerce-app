import { useSelector } from "react-redux";

import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartList);
  console.log(cartItems);
  return (
    <ul className="p-4 divide-y">
      {cartItems.map((c) => (
        <li key={c.id} className="flex flex-col ">
          <CartItem item={c} />
        </li>
      ))}
    </ul>
  );
};
export default Cart;
