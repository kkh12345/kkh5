import {
  CardTitle,
  CardDesc,
  CardPrice,
  CardColor,
  CardBadge,
  CardDiscountRate,
} from '../StyledComponent.js';
import './ProductsCard.css';
import Media from 'react-responsive';
import { useState } from 'react';
import ProductInfo from './ProductInfo.js';

const ProductsCard = ({
  product,
  hasCardIcons,
  cardTextHover,
  hasDiscountRate,
}) => {
  return (
    <div
      className="product-card"
      onMouseEnter={(e) => {
        if (window.innerWidth > 768) {
          if (cardTextHover) {
            e.currentTarget.children[1].classList.add('show');
          }
        }
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth > 768) {
          if (cardTextHover) {
            e.currentTarget.children[1].classList.remove('show');
          }
        }
      }}
    >
      <a
        href={`/productDetail/${product.productId}`}
        className="product-img-wrap"
      >
        {hasDiscountRate ? (
          product.discountRate > 0 ? (
            <CardDiscountRate>{product.discountRate}%</CardDiscountRate>
          ) : null
        ) : null}

        <img src={product.productImg} alt={product.name} />
        {hasCardIcons ? (
          <HoverIcons product={product !== null ? product : null}></HoverIcons>
        ) : null}
      </a>

      <CardText
        cardTextHover={cardTextHover}
        product={product !== null ? product : null}
      ></CardText>
    </div>
  );
};
const HoverIcons = ({ product }) => {
  return (
    <ul className="product-hover-icons">
      <li>
        <img
          src="/img/home/hamburger.png"
          alt="사이즈/컬러"
          title="사이즈/컬러"
        />
      </li>
      <li>
        <img
          src="/img/home/icon_202302210915591700.png"
          alt="상품상세보기"
          title="상품상세보기"
        />
      </li>

      <li>
        <img
          src="/img/home/icon_202302210916140400.png"
          alt="관심상품 등록"
          title="관심상품 등록"
        />
      </li>
      <li>
        <img
          src="/img/home/icon_202302210916052100.png"
          alt="장바구니에 담기"
          title="장바구니에 담기"
        />
      </li>
      <li>
        <img
          src="/img/home/icon_202302210916229800.png"
          alt="좋아요"
          title="좋아요"
        />
      </li>
    </ul>
  );
};

const CardText = ({ product, cardTextHover }) => {
  return (
    <Media minWidth={769}>
      <div className={`product-card-text ${cardTextHover ? 'absolute' : null}`}>
        <CardTitle>{product.name}</CardTitle>
        <CardDesc>{product.desc}</CardDesc>
        {product.discountRate === 0 ? (
          <CardPrice
            color={'#000'}
            decoration={'none'}
            weight={'bold'}
            fontSize={'1rem'}
          >
            <span className="card-original-price">
              {product.originalPrice.toLocaleString()} 원
            </span>
          </CardPrice>
        ) : (
          <CardPrice
            color={'#555555'}
            decoration={'line-through'}
            weight={'initial'}
            fontSize={'0.9375rem'}
          >
            <span className="card-original-price">
              {product.originalPrice.toLocaleString()} 원
            </span>
            <span className="card-discounted-price">
              {product.discountedPrice.toLocaleString()}원
            </span>
          </CardPrice>
        )}
        {product.color.length > 0 ? (
          <div className="card-color-wrap">
            {product.color.map((color, index) => {
              return <CardColor key={index} bg={color}></CardColor>;
            })}
          </div>
        ) : null}

        <CardBadge>
          {product.soldOut ? (
            <img src={'/img/home/badge-soldOut.gif'} alt="품절" />
          ) : null}
          {product.best ? (
            <img src={'/img/home/badge-best.png'} alt="베스트" />
          ) : null}
          {product.new ? (
            <img src={'/img/home/badge-new.png'} alt="신상품" />
          ) : null}
        </CardBadge>
      </div>
    </Media>
  );
};

export default ProductsCard;
