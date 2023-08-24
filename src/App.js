import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/Auth/SignIn";
const App = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
