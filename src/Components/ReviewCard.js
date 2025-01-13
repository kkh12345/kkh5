import { ReviewCardText } from '../StyledComponent';
import './ReviewCard.css';
const ReviewCard = ({ product, review, paginame, index }) => {
  return (
    <div className="review-card">
      <div className="review-img-wrap">
        {product !== -1 ? (
          <a href={`reviewDetail/${index}`}>
            {' '}
            <img src={product.productImg} alt={product.name} />
          </a>
        ) : (
          <a href={`reviewDetail/${index}`}>
            <img
              style={{ objectFit: 'contain' }}
              src="/img/home/logo.png"
              alt="로고"
            />
          </a>
        )}
      </div>
      <ReviewCardText>
        <div className="review-card-text-top">
          {paginame === 'review' ? (
            <div className="review-card-star">
              <img src={`/img/home/star${review.star}.png`} alt="평점" />
            </div>
          ) : null}
          <h3 className="review-card-title">{review.reviewTitle}</h3>
          <p className="review-card-content">{review.content}</p>
        </div>
        <div className="review-card-text-bottom">
          {paginame === 'home' ? (
            <div className="review-card-star">
              <img src={`/img/home/star${review.star}.png`} alt="평점" />
            </div>
          ) : null}
          {paginame === 'home' ? (
            <div className="review-card-date">{review.date}</div>
          ) : null}

          <div className="review-card-author">{review.author} 님</div>
        </div>
      </ReviewCardText>
    </div>
  );
};
export default ReviewCard;
