import { Link } from "react-router-dom";
import Item from "./Item";
import { useSelector } from "react-redux";
const ItemsList = () => {
  let items = useSelector((state) => state.item.itemsList);
  const filteredItems = useSelector((state) => state.item.filteredList);
  if(filteredItems){
    items = filteredItems;
  }
  return (
    <ul className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  bg-white my-5 ">
      {items.map((item, index) => (
        <li
          key={index}
          className="p-2  mx-0 cursor-pointer lists hover:text-indigo-500"
        >
          <Link to={`/ItemsList/${item.id}`}>
            <Item item={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ItemsList;
