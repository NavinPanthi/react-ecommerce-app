import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";
const CartItem = ({ item }) => {
  const storeItems = useSelector((state) => state.item.itemsList);
  const matchingItem = storeItems.find((sItem) => sItem.id === item.id);
  const dispatch = useDispatch();
  const id = matchingItem.id;
  const price = matchingItem.price;
  const handleRemove = (all) => {
    dispatch(cartActions.removeFromCart({ all, id, price }));
  };
  const handleAdd = () => {
    dispatch(cartActions.addToCart({ id, price }));
  };
  let all = null;
  return (
    <div className="grid grid-cols-4  h-28 gap-4 pt-2 p-3 overflow-hidden">
      <Link to={`/Cart/${item.id}`}>
        {" "}
        <img src={matchingItem.image} className="w-20  p-3 object-cover" alt="de" />
      </Link>
      <Link to={`/Cart/${item.id}`}>
        {" "}
        <div className="text-sm">{matchingItem.title}</div>
      </Link>

      <div className="flex items-center  flex-col gap-3">
        <span className="font-semibold text-orange-500">
          Rs. {parseInt(Math.round(item.totalPrice))}
        </span>
        <button onClick={()=>{all="all"; handleRemove(all)}}>
          <MdDeleteForever
            className="text-gray-500"
            size="1.8em"
          ></MdDeleteForever>
        </button>
      </div>
      <div className="text-center flex items-start justify-around">
        <Button onClick={handleRemove}>-</Button>
        <span className="">{item.quantity}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
    </div>
  );
};
const Button = ({ onClick, children }) => {
  return (
    <button
      className="text-gray-500 w-12 bg-gray-100 text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default CartItem;
