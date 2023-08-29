import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  const storeItems = useSelector((state) => state.item.itemsList);
  const matchingItem = storeItems.find((sItem) => sItem.id === item.id);
  return (
    <div className="grid grid-cols-4 h-28 gap-4 p-3 overflow-hidden">
      <Link to={`/Cart/${item.id}`}>
        {" "}
        <img src={matchingItem.image} className="w-20 p-1" alt="de" />
      </Link>
      <Link to={`/Cart/${item.id}`}>
        {" "}
        <div className="text-sm">{matchingItem.title}</div>
      </Link>

      <div className="flex items-center  flex-col gap-3">
        <span className="font-semibold text-orange-500">
          Rs. {item.totalPrice}
        </span>
        <span>
          <MdDeleteForever
            className="text-gray-500"
            size="1.8em"
          ></MdDeleteForever>
        </span>
      </div>
      <div className="text-center flex items-start justify-around">
        <Button>-</Button>
        <span className="">{item.quantity}</span>
        <Button>+</Button>
      </div>
    </div>
  );
};
const Button = ({ children }) => {
  return (
    <button className="text-gray-500 w-12 bg-gray-100 text-xl">
      {children}
    </button>
  );
};
export default CartItem;
