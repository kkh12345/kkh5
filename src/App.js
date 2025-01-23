import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import React, { useState, useEffect } from "react";
import Login from "./pages/Login.js";
import "./global.css";
import Join from "./pages/Join.js";
import axios from "axios";
import Search from "./pages/Search.js";
import Lookbook from "./pages/Lookbook.js";
import Shop from "./pages/Shop.js";
import Review from "./pages/Review.js";
import { ReviewDetail, ReviewDetailContent } from "./pages/ReviewDetail.js";
import ProductDetail from "./pages/ProductDetail.js";
import CartPage from "./pages/CartPage.js";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [login, setLogin] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);
  useEffect(() => {
    axios
      .get("/json/products.json")
      .then((data) => {
        let get = JSON.parse(localStorage.getItem("products"));

        if (get === null) {
          localStorage.setItem("products", JSON.stringify(data.data));
          setProducts(data.data);
        } else {
          setProducts(get);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("/json/review.json")
      .then((data) => {
        let get = JSON.parse(localStorage.getItem("reviews"));

        if (get === null) {
          localStorage.setItem("reviews", JSON.stringify(data.data));
          setReviews(data.data);
        } else {
          setReviews(get);
        }
      })
      .catch((err) => console.log(err));

    let get = JSON.parse(localStorage.getItem("login"));
    if (get === null) {
      localStorage.setItem("login", JSON.stringify(false));
    } else {
      setLogin(get);
    }

    get = JSON.parse(localStorage.getItem("userInfo"));
    if (get === null) {
      localStorage.setItem("userInfo", JSON.stringify([]));
    }

    get = JSON.parse(localStorage.getItem("cart"));
    if (get === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      setCartItems(get);
    }
  }, []);

  return (
    <div className="App">
      <Header
        cartItems={cartItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        login={login}
        setLogin={setLogin}
        cartCount={cartCount}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products.length > 0 ? products : null}
              reviews={reviews.length > 0 ? reviews : null}
            ></Home>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setLogin={setLogin}></Login>}
        ></Route>
        <Route path="/join" element={<Join></Join>}></Route>
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        ></Route>
        <Route path="/brand"></Route>
        <Route
          path="/search"
          element={
            <Search
              products={products.length > 0 ? products : null}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            ></Search>
          }
        ></Route>
        <Route
          path="/shop"
          element={<Shop products={products.length > 0 ? products : null} />}
        >
          <Route path="/shop/:id"></Route>
        </Route>
        <Route
          path="/lookbook"
          element={
            <Lookbook products={products.length > 0 ? products : null} />
          }
        ></Route>
        <Route
          path="/review"
          element={
            <Review
              products={products.length > 0 ? products : null}
              reviews={reviews.length > 0 ? reviews : null}
            ></Review>
          }
        ></Route>
        <Route path="/reviewDetail" element={<ReviewDetail></ReviewDetail>}>
          <Route
            path="/reviewDetail/:id"
            element={
              <ReviewDetailContent
                products={products.length > 0 ? products : null}
                reviews={reviews.length > 0 ? reviews : null}
              />
            }
          ></Route>
        </Route>
        <Route
          path="/productDetail/:id"
          element={
            <ProductDetail
              cartItems={cartItems}
              setCartItems={setCartItems}
            ></ProductDetail>
          }
        ></Route>

        <Route path="*" element={<h1>404 : 없는페이지입니다.</h1>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
