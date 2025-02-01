import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/product/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
