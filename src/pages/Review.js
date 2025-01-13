import './Review.css';
import { PagiTitle, PagiSubTitle } from '../StyledComponent';
import { useRef, useEffect } from 'react';
import ReviewCard from '../Components/ReviewCard';
import ContentTable from '../Components/ContentTable';
import { useState } from 'react';
import { Routes, Route } from 'react-router';

const Review = ({ reviews, products }) => {
  const reviewRef = useRef();

  useEffect(() => {
    reviewRef.current.parentElement.children[0].style.position = 'relative';
  }, []);
  const [isSelected, setIsSelected] = useState([false, true]);

  return (
    <div className="review" ref={reviewRef}>
      <div className="review-inner home-inner">
        <PagiTitle>상품 후기</PagiTitle>
        <PagiSubTitle className="review-subtitle">
          상품 사용후기입니다.
        </PagiSubTitle>
        <div className="review-select-view-method">
          <div
            onClick={() => {
              setIsSelected([true, false]);
            }}
          >
            <img
              src={
                isSelected[0]
                  ? '/img/home/review-list.png'
                  : '/img/home/review-list-gray.png'
              }
              alt="List"
            />
            <span
              style={{
                fontWeight: isSelected[0] ? '500' : '400',

                color: isSelected[0] ? '#000' : '##C2C2C2',
              }}
            >
              List
            </span>
          </div>
          <div
            onClick={() => {
              setIsSelected([false, true]);
            }}
          >
            <img
              src={
                isSelected[1]
                  ? '/img/home/review-grid.png'
                  : '/img/home/review-grid-gray.png'
              }
              alt="List"
            />
            <span
              style={{
                fontWeight: isSelected[1] ? '500' : '400',

                color: isSelected[1] ? '#000' : '##C2C2C2',
              }}
            >
              Grid
            </span>
          </div>
        </div>
        {isSelected[1] ? (
          <ul className="review-grid-container">
            {reviews !== null && products !== null
              ? reviews.map((review, index) => {
                  let findProduct = -1;

                  if (review.productId !== null) {
                    findProduct = products.find((product) => {
                      return product.productId === review.productId;
                    });
                  }

                  return (
                    <li key={index}>
                      <ReviewCard
                        index={index}
                        paginame={'review'}
                        product={findProduct}
                        review={review}
                      ></ReviewCard>
                    </li>
                  );
                })
              : null}
          </ul>
        ) : isSelected[0] ? (
          <div className="review-table-wrap">
            {
              <ContentTable
                reviews={reviews !== null ? reviews : null}
                products={products !== null ? products : null}
              ></ContentTable>
            }
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Review;
