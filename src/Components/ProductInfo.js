import { act, useEffect, useRef, useState, useLayoutEffect, use } from 'react';
import './ProductInfo.css';

import React from 'react';
import { Fragment } from 'react';

const ProductInfo = ({ id }) => {
  const zoomBoxRef = useRef(null);
  const bigImageRef = useRef(null);
  const [imgWrapMouseIn, setImgWrapMouseIn] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [like, setLike] = useState(false);

  let get = JSON.parse(localStorage.getItem('products'));

  useEffect(() => {
    if (get !== null) {
      let findIndex = get.findIndex((a) => {
        return a.productId === parseInt(id);
      });
      localStorage.setItem('products', JSON.stringify(get));
      setCurrentProduct(get[findIndex]);
      setLike(get[findIndex].isInterested);
    }
  }, []);
  useEffect(() => {
    if (get !== null) {
      let findIndex = get.findIndex((a) => {
        return a.productId === parseInt(id);
      });
      get[findIndex].isInterested = like;
      localStorage.setItem('products', JSON.stringify(get));
    }
  }, [like]);
  return (
    <div className="product-info">
      <div className="product-info-left">
        <div
          className="img-wrap"
          onMouseEnter={() => {
            setImgWrapMouseIn(true);
          }}
          onMouseLeave={() => {
            setImgWrapMouseIn(false);
          }}
          onMouseMove={(e) => {
            let [positionX, positionY] = [0, 0];
            if (zoomBoxRef.current !== null && bigImageRef.current !== null) {
              let mouseX = e.nativeEvent.offsetX;
              let mouseY = e.nativeEvent.offsetY;
              let zoomBoxWidth = zoomBoxRef.current.offsetWidth;
              let zoomBoxHeight = zoomBoxRef.current.offsetHeight;
              let imgWrapWidth = zoomBoxRef.current.parentElement.offsetWidth;
              let imgWrapHeight = zoomBoxRef.current.parentElement.offsetHeight;
              if (0 <= mouseX && mouseX < zoomBoxWidth / 2) {
                positionX = zoomBoxWidth / 2;
              } else if (mouseX + zoomBoxWidth / 2 <= imgWrapWidth) {
                positionX = mouseX;
              } else {
                positionX = imgWrapWidth - zoomBoxWidth / 2;
              }
              if (0 <= mouseY && mouseY < zoomBoxHeight / 2) {
                positionY = zoomBoxHeight / 2;
              } else if (mouseY + zoomBoxHeight / 2 <= imgWrapHeight) {
                positionY = mouseY;
              } else {
                positionY = imgWrapHeight - zoomBoxHeight / 2;
              }
              setTimeout(() => {
                bigImageRef.current.children[0].style.transform = `scale(1.5) translate(${
                  ((positionX / imgWrapWidth - 0.5) * 100 * 2) / 3
                }%,${((positionY / imgWrapHeight - 0.5) * 100 * 2) / 3}%)`;
                zoomBoxRef.current.style.top = `${positionY}px`;
                zoomBoxRef.current.style.left = `${positionX}px`;
              }, 50);
            }
          }}
        >
          <div
            style={{
              display: imgWrapMouseIn ? 'block' : 'none',
            }}
            className="zoom-box"
            ref={zoomBoxRef}
          ></div>

          <img
            src={currentProduct !== null ? currentProduct.productImg : null}
            alt={currentProduct !== null ? currentProduct.name : null}
          />

          <img
            className="let-mouse-hover"
            src="/img/home/let-mousehover.gif"
            alt="마우스를 올려보세요"
          />
          <div
            className="big-img-wrap"
            ref={bigImageRef}
            style={{
              display: imgWrapMouseIn ? 'block' : 'none',
            }}
          >
            <img
              src={currentProduct !== null ? currentProduct.productImg : null}
              alt={currentProduct !== null ? currentProduct.name : null}
            />
          </div>
        </div>

        <div className="interest-icon-wrap">
          <button
            style={{
              color: like ? 'red' : '#555555',
            }}
            onClick={() => {
              setLike(!like);
            }}
          >
            <img
              src={
                like
                  ? '/img/home/interest-icon-black.png'
                  : '/img/home/interest-icon-white.png'
              }
              alt="좋아요"
            />
            좋아요
          </button>
        </div>
      </div>

      <div className="product-info-right">
        <ul>
          <li>
            <span className="left">상품명</span>
            <span className="right">
              {currentProduct !== null ? currentProduct.name : null}
            </span>
          </li>
          <li>
            <span className="left">상품요약정보</span>
            <span className="right">
              {currentProduct !== null ? currentProduct.desc : null}
            </span>
          </li>
          <li>
            <span className="left">소비자가</span>
            <span className="right">
              {currentProduct !== null
                ? currentProduct.originalPrice.toLocaleString()
                : null}
              원
            </span>
          </li>
          <li>
            <span className="left">판매가</span>
            <span className="right">
              <span>
                {currentProduct !== null
                  ? currentProduct.discountedPrice.toLocaleString()
                  : null}
                원
              </span>
              <span>
                {currentProduct !== null ? currentProduct.discountRate : null}%
              </span>
            </span>
          </li>
          <li>
            <span className="left">국내·해외배송</span>
            <span className="right">
              <span> 국내배송</span>
            </span>
          </li>
          <li>
            <span className="left">배송방법</span>
            <span className="right">
              <span> 택배</span>
            </span>
          </li>
          <li>
            <span className="left">배송비</span>
            <span className="right">
              <span>
                <span>2,500원</span> (50,000원 이상 구매 시 무료)
              </span>
            </span>
          </li>
        </ul>
        {currentProduct !== null && currentProduct.size.length > 0 ? (
          <div className="product-size-wrap">
            <ProductSizeBox
              currentProduct={currentProduct !== null ? currentProduct : null}
              product="currentProduct"
            ></ProductSizeBox>
          </div>
        ) : null}
        {currentProduct !== null && currentProduct.color.length > 0 ? (
          <div className="product-color-wrap">
            <ProductColorBox
              product="currentProduct"
              currentProduct={currentProduct !== null ? currentProduct : null}
            ></ProductColorBox>
          </div>
        ) : null}

        <span className="minimum-order">(최소주문수량 1개 이상)</span>
        <AdditionalProducts
          get={get}
          currentProduct={currentProduct !== null ? currentProduct : null}
        ></AdditionalProducts>
        <div className="result-box">
          <div className="result-box-desc">
            <img src="/img/home/result-box-warn.gif" alt="느낌표" />
            <span>위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</span>
          </div>
          <div className="result-box-sum">
            <span>총 상품금액</span>
            <span>(수량) : </span>
            <span>0</span> <span>(0개)</span>
          </div>
        </div>
        <div className="buy-button-wrap">
          <div className="buy-now-button">
            <button>바로 구매하기</button>
          </div>
          <div className="cart-button-wrap">
            <button onClick={() => {}}>장바구니 담기</button>
            <button>관심상품등록</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSizeBox = ({ product, currentProduct }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="product-size-box">
      <div className="product-size-box-left">사이즈</div>
      <div className="product-size-box-right">
        <div className="input-wrap">
          {currentProduct !== null
            ? currentProduct.size.map((a, i) => {
                return (
                  <React.Fragment key={i}>
                    <input
                      onChange={(e) => {
                        setSelectedSize(a);
                      }}
                      type="checkbox"
                      name={`size${currentProduct.productId}`}
                      id={`${a}${currentProduct.productId}`}
                      value={a}
                    />
                    <label htmlFor={`${a}${currentProduct.productId}`}>
                      {a}
                    </label>
                  </React.Fragment>
                );
              })
            : null}
        </div>
        <span>
          [필수] {selectedSize !== null ? selectedSize : '옵션을 선택해 주세요'}
        </span>
      </div>
    </div>
  );
};
const ProductColorBox = ({ product, currentProduct }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="product-color-box">
      <div className="product-color-box-left">컬러</div>
      <div className="product-color-box-right">
        <div className="input-wrap">
          {currentProduct !== null
            ? currentProduct.color.map((a, i) => {
                return (
                  <React.Fragment key={i}>
                    <input
                      onChange={(e) => {
                        setSelectedColor(a);
                      }}
                      type="checkbox"
                      name={`color${currentProduct.productId}`}
                      style={{ backgroundColor: a }}
                      value={a}
                    />
                  </React.Fragment>
                );
              })
            : null}
        </div>

        <span>
          [필수]{' '}
          {selectedColor !== null ? selectedColor : '옵션을 선택해 주세요'}
        </span>
      </div>
    </div>
  );
};

const AdditionalProducts = ({ currentProduct, get }) => {
  const [additionalProducts, setAdditionalProducts] = useState([]);

  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (currentProduct !== null) {
      let copy = [...additionalProducts];
      currentProduct.additionalProducts.forEach((a, i) => {
        let find = get.find((b) => {
          return a === b.productId;
        });
        copy[i] = find;
      });
      setAdditionalProducts(copy);
    }
  }, [currentProduct]);
  return (
    <div className="additional-products">
      <div className="additional-products-header">
        <span>추가구성상품</span>
        <span>추가로 구매를 원하시면 선택하세요.</span>
        <img
          onClick={() => {
            setIsShow(!isShow);
          }}
          src={
            isShow
              ? `/img/home/btn_additional_close.gif`
              : `/img/home/btn_additional_open.gif`
          }
          alt="접기"
        />
      </div>
      <div
        className="additional-products-list"
        style={{
          maxHeight: isShow ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height .3s',
        }}
      >
        <ul>
          {additionalProducts.length > 0
            ? additionalProducts.map((a, index) => {
                return (
                  <li key={index}>
                    <div className="img-wrap">
                      <img src={a.productImg} alt={a.name} />
                    </div>
                    <div className="right">
                      <span>{a.name}</span>
                      <span>{a.originalPrice.toLocaleString()}원</span>
                      {a !== null && a.size.length > 0 ? (
                        <ProductSizeBox currentProduct={a}></ProductSizeBox>
                      ) : null}
                      {a !== null && a.color.length > 0 ? (
                        <ProductColorBox currentProduct={a}></ProductColorBox>
                      ) : null}
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
