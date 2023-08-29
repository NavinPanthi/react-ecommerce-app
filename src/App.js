import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/Auth/SignIn";
import ItemDetail from "./components/Items/ItemDetail";
// import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <div >
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cart/:itemId" element={<ItemDetail/>}/>
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/ItemsList/:itemId" element={<ItemDetail />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
};
export default App;
