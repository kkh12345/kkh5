import { useEffect, useRef, useState } from "react";
import { PagiTitle } from "../StyledComponent";
import ProductsGrid from "../Components/ProductsGrid";

const Search = ({ searchValue, setSearchValue, products }) => {
  const searchRef = useRef();
  const [searchContent, setSearchContent] = useState(null);

  useEffect(() => {
    if (products !== null) {
      if (searchValue !== "") {
        let filter = products.filter((product) => {
          return product.name.split(" ").join("").includes(searchValue);
        });
        setSearchContent(filter);
      }
    }
  }, [searchValue]);
  useEffect(() => {
    searchRef.current.parentElement.children[0].style.position = "relative";
  }, []);
  return (
    <div ref={searchRef} className="search">
      <div className="search-inner home-inner">
        <PagiTitle>상품검색</PagiTitle>
        <div className="search-container">
          <div className="search-input-wrap">
            <input type="text" />
            <span
              className="search-icon-wrap"
              onClick={(e) => {
                if (e.currentTarget.previousElementSibling.value !== "") {
                  setSearchValue(e.currentTarget.previousElementSibling.value);
                } else {
                  alert("검색어를 입력하세요");
                }
              }}
            >
              <i className="xi-search"></i>
            </span>
          </div>
          <ul className="popular-kewords">
            <li
              onClick={() => {
                setSearchValue("BOWL");
              }}
            >
              BOWL
            </li>
            <li
              onClick={() => {
                setSearchValue("STRIPE");
              }}
            >
              STRIPE
            </li>
            <li
              onClick={() => {
                setSearchValue("VASE");
              }}
            >
              VASE
            </li>
            <li
              onClick={() => {
                setSearchValue("T");
              }}
            >
              T
            </li>
          </ul>
        </div>
        {
          <ProductsGrid
            paginame={"search"}
            state={searchContent !== null ? searchContent : null}
            setState={searchContent !== null ? setSearchContent : null}
          ></ProductsGrid>
        }
      </div>
    </div>
  );
};
export default Search;
