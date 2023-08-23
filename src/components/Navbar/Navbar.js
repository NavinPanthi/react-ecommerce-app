import { Link, useLocation } from "react-router-dom";
// instead of "a" tag, we use "Link" component in react routing.
// instead of href, we use to attribute in Link component.
const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between w-full items-center bg-indigo-500 text-white ">
      <Link to="/" className="text-3xl pl-5 font-medium">
        My site
      </Link>
      <ul className="flex flex-row justify-end text-lg mt-0 px-6 py-3 text-md ">
        <CustomLink to="/Signin" className="px-5 ">
          Sigin
        </CustomLink>
        <CustomLink to="/Cart" className="px-5 ">
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
    <li className={path === to ? "bg-amber-500 visited:text-purple-600" : ""}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  );
};
export default Navbar;
