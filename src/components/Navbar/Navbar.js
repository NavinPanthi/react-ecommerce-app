import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
// instead of "a" tag, we use "Link" component in react routing.
// instead of href, we use to attribute in Link component.
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import "./navbar.css";
const Navbar = () => {
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="flex flex-row justify-between w-full items-center bg-indigo-500 text-white sticky top-0">
      <Link
        to="/"
        className="text-3xl pl-5 font-medium tracking-tight font-serif"
      >
        Panthi Store
      </Link>
      <ul className="flex flex-row justify-end text-base font-medium mt-0 px-6 py-3 text-md ">
        <CustomLink to="/Signin" className="px-5 h-8 flex items-center">
          Sigin
        </CustomLink>
        <CustomLink
          to="/Cart"
          className="px-5 h-8 flex items-center justify-around"
        >
          <div className="flex relative h-10 items-center w-8">
            <BsCart3 className="mr-2" size="1.5em"></BsCart3>
            <div className="h-4 w-4 flex items-center text-indigo-600 justify-center small-font rounded-full bg-white overflow-hidden absolute right-1 top-0 font-normal ring-2 ring-indigo-500">
              {totalCartItems}
            </div>
          </div>
          Cart
        </CustomLink>
      </ul>
    </nav>
  );
};

const CustomLink = ({ to, children, className }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <li className={path === to ? "visited:text-purple-600" : ""}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  );
};
export default Navbar;
