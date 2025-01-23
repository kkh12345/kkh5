import { useEffect, useRef, useState } from "react";
import { PagiTitle } from "../StyledComponent";
import "./CartPage.css";
const CartPage = ({ cartItems, setCartItems }) => {
  const cartRef = useRef();

  const [itemCheck, setItemCheck] = useState(null);
  const [selectedCartItems, setSelectedCartItems] = useState(null);
  const [sumPrice, setSumPrice] = useState(0);
  const getProducts = JSON.parse(localStorage.getItem("products"));

  function sumPriceFn() {
    let sum = 0;
    if (selectedCartItems !== null) {
      selectedCartItems.forEach((a) => {
        if (a !== null && a !== undefined) {
          let find = getProducts.find((b) => {
            return a.id === b.productId;
          });

          sum += a.count * find.discountedPrice;
        }
      });
      setSumPrice(sum);
    }
  }
  useEffect(() => {
    cartRef.current.parentElement.children[0].style.position = "relative";
    setItemCheck(Array(cartItems.length).fill(false));
    setSelectedCartItems(Array(cartItems.length).fill(null));
  }, []);

  useEffect(() => {
    sumPriceFn();
  }, [selectedCartItems]);

  return (
    <div className="cart-page" ref={cartRef}>
      <div className="cart-page-inenr home-inner">
        <PagiTitle>장바구니</PagiTitle>
        <table className="cartItem-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="select-all"
                  onChange={(e) => {
                    let copy = [...itemCheck];
                    if (e.target.checked) {
                      setItemCheck(
                        copy.map((a) => {
                          a = true;
                          return a;
                        })
                      );
                      setSelectedCartItems(cartItems);
                    } else {
                      setItemCheck(
                        copy.map((a) => {
                          a = false;
                          return a;
                        })
                      );
                      setSelectedCartItems([]);
                    }
                  }}
                />
              </th>
              <th>이미지</th>
              <th>상품정보</th>
              <th>수량</th>
              <th>상품구매금액</th>
              <th>할인금액</th>
              <th>옵션</th>
              <th>배송비</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              let find = getProducts.find((a) => {
                return item.id === a.productId;
              });

              return (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={itemCheck[index] ? true : false}
                      onChange={(e) => {
                        let copy = [...itemCheck];
                        let copy2 = [...selectedCartItems];
                        copy[index] = !copy[index];

                        if (copy[index]) {
                          copy2[index] = item;
                        } else {
                          copy2[index] = null;
                        }
                        setItemCheck(copy);
                        setSelectedCartItems(copy2);
                      }}
                    />
                  </td>
                  <td>
                    <img src={find.productImg} alt={find.name} />
                  </td>
                  <td>{find.name}</td>
                  <td>
                    <input
                      type="number"
                      defaultValue={item.count}
                      onChange={(e) => {
                        sumPriceFn();
                        let copy = [...cartItems];

                        if (e.target.value <= 0) {
                          copy.splice(index, 1);
                        } else {
                          copy[index].count = parseInt(e.target.value);
                        }
                        setCartItems(copy);
                        localStorage.setItem("cart", JSON.stringify(copy));
                      }}
                    />
                  </td>
                  <td>{find.discountedPrice.toLocaleString()}원</td>
                  <td>
                    {(
                      (find.originalPrice * find.discountRate) /
                      100
                    ).toLocaleString()}
                    원
                  </td>
                  <td>
                    {item.size !== undefined ? item.size : "없음"} /{" "}
                    {item.color !== undefined ? (
                      <span
                        style={{
                          width: "10px",
                          backgroundColor: item.color,
                          display: "inline-block",
                          aspectRatio: "1/1",
                        }}
                      ></span>
                    ) : (
                      "없음"
                    )}
                  </td>
                  <td>2,500원</td>
                  <td>
                    <button
                      onClick={() => {
                        let copy = [...cartItems];
                        copy.splice(index, 1);
                        setCartItems(copy);
                        localStorage.setItem("cart", JSON.stringify(copy));
                      }}
                    >
                      <i className="xi-close"></i>삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="cart-functions">
          <span>
            <img src="/img/home/result-box-warn.gif" alt="알림아이콘" />
            할인 적용 금액은 주문서작성의 결제예정금액에서 확인 가능합니다.
          </span>
          <div className="cart-functions-button-wrap">
            <b>선택상품을</b>
            <button
              onClick={() => {
                selectedCartItems.forEach((a, i) => {
                  if (a !== null && a !== undefined) {
                    let copy = [...cartItems];
                    copy.splice(i, 1);
                    setCartItems(copy);
                    localStorage.setItem("cart", JSON.stringify(copy));
                  }
                });
              }}
            >
              <i className="xi-close"></i>삭제하기
            </button>
            <button
              onClick={() => {
                setCartItems([]);
                localStorage.setItem("cart", JSON.stringify([]));
              }}
            >
              장바구니비우기
            </button>
          </div>
        </div>
        <table className="cart-result-table">
          <thead>
            <tr>
              <th>총 상품금액</th>
              <th>총 배송비</th>
              <th>결제예정금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sumPrice.toLocaleString()}원</td>
              <td>+2,500원</td>
              <td>
                {sumPrice !== 0 ? (sumPrice + 2500).toLocaleString() : 0}원
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CartPage;
