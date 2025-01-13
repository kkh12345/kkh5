import './ProductsGrid.css';
import ProductsCard from './ProductsCard';
import '../pages/Search.css';
import { useState } from 'react';

const ProductsGrid = ({ state, setState, paginame }) => {
  const [selected, setSelected] = useState([false, false, false, false]);
  return (
    <div className="products-grid-box">
      <div className="products-grid-box-top">
        {paginame === 'search' ? (
          <span>
            총{' '}
            <b className="products-result-count">
              {state !== null ? state.length : 0}
            </b>{' '}
            개의 상품이 검색되었습니다.
          </span>
        ) : paginame === 'shop' ? (
          <span>
            등록 상품 :
            <b className="products-result-count">
              {state !== null ? state.length : 0}
            </b>
            개
          </span>
        ) : null}

        <ul className="products-options">
          <li
            className={selected[0] ? 'selected' : null}
            onClick={() => {
              if (state !== null) {
                let copy = [...state];
                copy.sort((a, b) => {
                  if (a.new === true || b.new === false) {
                    return -1;
                  }
                });
                setState(copy);

                let map = selected.map((a, i) => {
                  if (i === 0) {
                    a = true;
                  } else {
                    a = false;
                  }
                  return a;
                });
                setSelected(map);
              }
            }}
          >
            신상품
          </li>
          <li
            className={selected[1] ? 'selected' : null}
            onClick={() => {
              if (state !== null) {
                let copy = [...state];
                copy.sort((a, b) => {
                  if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                  } else if (a.name.toUpperCase() === b.name.toUpperCase()) {
                    return 0;
                  } else {
                    return -1;
                  }
                });

                setState(copy);
                let map = selected.map((a, i) => {
                  if (i === 1) {
                    a = true;
                  } else {
                    a = false;
                  }
                  return a;
                });
                setSelected(map);
              }
            }}
          >
            상품명
          </li>
          <li
            className={selected[2] ? 'selected' : null}
            onClick={() => {
              if (state !== null) {
                let copy = [...state];
                copy.sort((a, b) => {
                  if (a.discountedPrice > b.discountedPrice) {
                    return 1;
                  } else if (a.discountedPrice === b.discountedPrice) {
                    return 0;
                  } else {
                    return -1;
                  }
                });

                setState(copy);
                let map = selected.map((a, i) => {
                  if (i === 2) {
                    a = true;
                  } else {
                    a = false;
                  }
                  return a;
                });
                setSelected(map);
              }
            }}
          >
            낮은가격
          </li>
          <li
            className={selected[3] ? 'selected' : null}
            onClick={() => {
              if (state !== null) {
                let copy = [...state];
                copy.sort((a, b) => {
                  if (a.discountedPrice > b.discountedPrice) {
                    return -1;
                  } else if (a.discountedPrice === b.discountedPrice) {
                    return 0;
                  } else {
                    return 1;
                  }
                });

                setState(copy);
                let map = selected.map((a, i) => {
                  if (i === 3) {
                    a = true;
                  } else {
                    a = false;
                  }
                  return a;
                });
                setSelected(map);
              }
            }}
          >
            높은가격
          </li>
        </ul>
      </div>

      {state === null || state.length === 0 ? (
        <div className="no-products-box">
          {paginame === 'search' ? '검색 결과가 없습니다.' : null}
        </div>
      ) : (
        <ul className="products-grid-grid-box">
          {state.map((content, index) => {
            return (
              <li key={index}>
                <ProductsCard
                  product={content}
                  hasCardIcons={false}
                  cardTextHover={false}
                  hasDiscountRate={true}
                ></ProductsCard>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ProductsGrid;
