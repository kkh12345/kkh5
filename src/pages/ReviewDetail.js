import { PagiSubTitle, PagiTitle } from '../StyledComponent';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import './ReviewDetail.css';
const ReviewDetail = ({}) => {
  const reviewDetailRef = useRef();

  useEffect(() => {
    reviewDetailRef.current.parentElement.children[0].style.position =
      'relative';
  }, []);
  return (
    <div className="review-detail" ref={reviewDetailRef}>
      <div className="review-detail-inner home-inner">
        <PagiTitle>상품 후기</PagiTitle>
        <PagiSubTitle className="review-subtitle">
          상품 사용후기입니다.
        </PagiSubTitle>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

const ReviewDetailContent = ({ products, reviews }) => {
  const { id } = useParams();
  const [findProduct, setFindProduct] = useState(null);
  const [findReview, setFindReview] = useState(null);
  let getReviews = JSON.parse(localStorage.getItem('reviews'));

  useEffect(() => {
    if (products !== null && reviews !== null) {
      let find = products.find((a) => {
        return a.productId === reviews[id].productId;
      });
      let findIndex = reviews.findIndex((a) => {
        return a.productId === null;
      });
      if (find === undefined) {
        setFindReview(reviews[findIndex]);
        setFindProduct({
          productImg: '/img/home/logo.png',
          smallImg: [],
          name: '상품선택안함',
          discountedPrice: 22000,
          best: false,
          new: false,
          soldOut: false,
        });
      } else {
        setFindReview(reviews[id]);
        setFindProduct(find);
      }
    }
  }, [products, reviews]);

  return (
    <div className="review-detail-content">
      <div className="view-product-detail">
        <div className="left">
          <img
            src={findProduct !== null ? findProduct.productImg : null}
            alt={findProduct !== null ? findProduct.name : null}
          />
        </div>
        <div className="right">
          <div className="right-top">
            <span className="badge">
              {findProduct !== null ? (
                findProduct.new ? (
                  <img src="/img/home/badge-new.png" alt="신상품" />
                ) : null
              ) : null}
              {findProduct !== null ? (
                findProduct.best ? (
                  <img src="/img/home/badge-best.png" alt="베스트상품" />
                ) : null
              ) : null}
              {findProduct !== null ? (
                findProduct.soldOut ? (
                  <img src="/img/home/badge-soldOut.gif" alt="품절" />
                ) : null
              ) : null}
            </span>
            <p className="product-name">
              {findProduct !== null ? findProduct.name : null}
            </p>
            <b>
              {findProduct !== null
                ? findProduct.discountedPrice.toLocaleString()
                : null}
              원
            </b>
          </div>
          <div className="right-bottom">
            <button>
              <a href="#none">상품 상세보기</a>
            </button>
          </div>
        </div>
      </div>
      <div className="view-review-detail">
        <ul>
          <li>제목</li>
          <li>
            {findProduct !== null
              ? findReview !== null
                ? findReview.reviewTitle
                : null
              : null}
          </li>
          <li>작성자</li>
          <li>
            {findProduct !== null
              ? findReview !== null
                ? findReview.author
                : null
              : null}
          </li>
          <li className="review-info">
            <span>
              <b>평점</b>
              {findReview !== null ? (
                <img src={`/img/home/star${findReview.star}.png`} alt="평점" />
              ) : null}
            </span>
            <span>
              <b>작성일</b> {findReview !== null ? findReview.date : null}
            </span>
            <span>
              <b>조회수</b>
              {findReview !== null ? findReview.viewCount : null}
            </span>
          </li>
          <li className="review-content">
            {findReview !== null ? findReview.content : null}
          </li>
        </ul>
      </div>
      <div className="go-to-inventory">
        <button>
          <a href="/review">목록</a>
        </button>
      </div>
      <ul className="prev-review">
        <li>
          <span>
            <i className="xi-angle-up"></i>이전글
          </span>
          {parseInt(id) === 0 ? (
            <p>이전글이 없습니다.</p>
          ) : (
            <p>
              <a href={`/reviewDetail/${parseInt(id) - 1}`}>
                {reviews !== null
                  ? reviews[parseInt(id) - 1].reviewTitle
                  : null}
              </a>
            </p>
          )}
        </li>
        <li>
          <span>
            {' '}
            <i className="xi-angle-down"></i>다음글
          </span>
          {reviews !== null ? (
            parseInt(id) === reviews.length - 1 ? (
              <p>다음글이 없습니다.</p>
            ) : (
              <p>
                {' '}
                <a href={`/reviewDetail/${parseInt(id) + 1}`}>
                  {reviews[parseInt(id) + 1].reviewTitle}
                </a>
              </p>
            )
          ) : null}
        </li>
      </ul>
    </div>
  );
};
export { ReviewDetail, ReviewDetailContent };
