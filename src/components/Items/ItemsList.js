import { Link } from "react-router-dom";
import Item from "./Item";
import { useSelector } from "react-redux";
import { useState } from "react";

const renderList = (items) => {
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

const ItemsList = () => {
  let items = useSelector((state) => state.item.itemsList);

  const filteredItems = useSelector((state) => state.item.filteredList);
  if (filteredItems) {
    items = filteredItems;
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pages = [];
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexofFirstItem, indexOfLastItem);

  const renderPageNumbers = () => {
    let listClassName = "p-2 text-center w-full cursor-pointer ";
    let listClassNameActive = listClassName + " bg-gray-300";
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pages.push(i);
    }
    const handleClick = (e) => {
      setCurrentPage(Number(e.target.id));
    };
    const handlePrev = () => {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
    const handleNext = () => {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };
    let pageIncrementButton = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementButton = (
        <li onClick={handleNext} className="p-2 mx-1">
          &hellip;
        </li>
      );
    }
    let pageDecrementButton = null;
    if (minPageNumberLimit !== 0) {
      pageDecrementButton = (
        <li onClick={handlePrev} className="p-2 mx-1 ">
          &hellip;
        </li>
      );
    }
    return (
      <div className="flex sm:justify-end">
        <ul className="flex mx-auto sm:mx-4 shadow-lg text-indigo-900 flex-row mt-9 w-72 rounded-xl divide-x  divide-gray-300 overflow-hidden text-sm">
          <button
            className={`p-2 ${
              currentPage === pages[0] ? "opacity-50" : "active:bg-gray-300"
            }`}
            onClick={handlePrev}
            disabled={currentPage === pages[0]}
          >
            Prev
          </button>
          {pageDecrementButton}
          {pages.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <li
                  key={number}
                  id={number}
                  className={
                    currentPage === number ? listClassNameActive : listClassName
                  }
                  onClick={handleClick}
                >
                  {number}
                </li>
              );
            } else {
              return null;
            }
          })}
          {pageIncrementButton}
          <button
            className={`p-2  ${
              currentPage === pages[pages.length - 1]
                ? "opacity-30"
                : "active:bg-gray-300"
            }`}
            onClick={handleNext}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </ul>
      </div>
    );
  };
  return (
    <div>
      {renderList(currentItems)}
      {renderPageNumbers()}
    </div>
  );
};
export default ItemsList;
