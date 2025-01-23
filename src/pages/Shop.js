import "./Shop.css";
import ProductsGrid from "../Components/ProductsGrid";

import { PagiTitle } from "../StyledComponent";
import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";

const Shop = ({ products }) => {
  const [shopProducts, setShopProducts] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (products !== null) {
      setShopProducts([...products]);
    }
  }, [products]);
  const shopRef = useRef();
  useEffect(() => {
    shopRef.current.parentElement.children[0].style.position = "relative";
  }, []);
  return (
    <div ref={shopRef} className="shop">
      <div className="shop-inner home-inner">
        <PagiTitle>{id}</PagiTitle>
        <ProductsGrid
          paginame="shop"
          state={shopProducts !== null ? shopProducts : null}
          setState={shopProducts !== null ? setShopProducts : null}
        ></ProductsGrid>
      </div>
    </div>
  );
};
export default Shop;
