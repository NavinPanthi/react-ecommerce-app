import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ItemDetail = () => {
  const items = useSelector((state) => state.item.itemsList);
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const clickedItem = items.find((item) => item.id === parseInt(itemId));
  if (!clickedItem) {
    return <div>Item not found.</div>;
  }
  const handleAdd = () => {
    const id = clickedItem.id;
    const price = clickedItem.price;
    dispatch(cartActions.addToCart({ id, price }));
  };
  return (
    <div className="flex flex-col sm:flex-row p-2">
      <div className="flex flex-col w-full sm:w-2/5    mr-3">
        <img
          src={clickedItem.image}
          className="p-7 h-5/6 border"
          alt="full representation"
        />
        <div className="mt-1">
          <button
            className=" text-white font-bold bg-amber-500 w-1/2 h-9"
            onClick={handleAdd}
          >
            Add to Cart
          </button>
          <button className="text-white font-bold bg-orange-500 w-1/2 h-9">
            Buy
          </button>
        </div>
      </div>
      <div className="w-full sm:w-3/5">
        <h2 className="text-xl font">{clickedItem.title}</h2>

        <div className="flex flex-row mt-1 ">
          <span className="bg-green-600 mr-1  text-xs rounded flex items-center w-fit font-semibold text-white p-1  justify-around">
            {clickedItem.rating.rate}
            <AiFillStar className="ml-1 "></AiFillStar>
          </span>
          <span className="font-semibold text-gray-500 ml-1 text-sm">
            ({clickedItem.rating.count}) ratings
          </span>
        </div>
        <div className="mt-2 text-green-600 font-medium">Special price</div>
        <div className=" font-bold text-3xl ">Rs. {clickedItem.price}</div>
        <hr className="my-1" />
        <div className="flex gap-9">
          <span className="text-gray-500 text-sm">Description</span>
          <span className="text-sm">{clickedItem.description}</span>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
