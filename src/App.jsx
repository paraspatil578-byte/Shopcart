import { useEffect, useReducer, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ProductDetails from "./components/pages/ProductDetails";
import NotFound from "./components/pages/Notfound";
import Footer from "./components/Footer";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
}

function App() {
  const [userName, setUserName] = useState("");
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Restore the saved cart when the app opens
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
      }
    } catch (error) {
      console.error("Could not load saved cart:", error);
    }
    setCartLoaded(true);
  }, []);

  // Save the cart whenever it changes (only after the restore has finished)
  useEffect(() => {
    if (!cartLoaded) return;

    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save cart:", error);
    }
  }, [cart, cartLoaded]);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home userName={userName} cart={cart} />} />
      <Route
        path="/products"
        element={<Products userName={userName} cart={cart} dispatch={dispatch} />}
      />
      <Route
        path="/products/:id"
        element={
          <ProductDetails userName={userName} cart={cart} dispatch={dispatch} />
        }
      />
      <Route path="/about" element={<About userName={userName} cart={cart} />} />
      <Route path="/contact" element={<Contact userName={userName} cart={cart} />} />
      <Route
        path="/cart"
        element={<Cart userName={userName} cart={cart} dispatch={dispatch} />}
      />
      <Route path="/login" element={<Login setUserName={setUserName} />} />
      <Route path="/register" element={<Register setUserName={setUserName} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;