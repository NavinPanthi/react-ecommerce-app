import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../store/itemSlice";
const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    let searchTerm = e.target.value;
    dispatch(itemActions.searchItem({ searchTerm }));
  };

  return (
    <div className="flex flex-row search border mt-4 mx-3 border-slate-300 rounded-md flex-nowrap items-center focus-within:border-sky-500 focus:outline-none focus:border-sky-500 500 focus-within:ring-sky-500 focus-within:ring-1 text-sm">
      <MdSearch className="search-icon icons ml-1 me-1 my-1 " size="1.3em" />
      <input
        type="text"
        className="placeholder-italic py-2 border-0 w-full rounded focus:none outline-none text-sm placeholder:italic placeholder:text-slate-400"
        placeholder="Search expense"
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;
