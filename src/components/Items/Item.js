import { AiFillStar } from "react-icons/ai";
const Item = ({ item }) => {

  return (
<>
      <img
        src={item.image}
        alt="representation of a product"
        className="h-52 p-2"
      />
      <p className={`text-sm  item-title `}>{item.title}</p>
      <div className="flex flex-row mt-1 ">
        <span className="bg-green-600 mr-1  text-xs rounded flex items-center w-fit font-semibold text-white p-1  justify-around">
          {item.rating.rate}
          <AiFillStar className="ml-1 "></AiFillStar>
        </span>
        <span className="font-semibold text-gray-500  text-sm">
          ({item.rating.count})
        </span>
      </div>
      <div className="font-semibold text-black tracking-tight">Rs. {item.price}</div>
      </>
  );
};
export default Item;
