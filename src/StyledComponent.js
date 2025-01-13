import styled from "styled-components";

const PagiTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const PagiSubTitle = styled.p`
  text-align: center;
  color: #555;
  font-weight: 300;
  margin-top: 4px;
`;
const SectionTitle = styled.h1`
  font-size: 1.625rem;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  & > .plus {
    position: absolute;
    right: 0;
    font-size: 1.5rem;
    bottom: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;

    & > .plus {
      font-size: 1.2rem;
    }
  }
`;
const ViewMoreCardButton = styled.button`
  display: none;
  margin: 30px auto 0;
  font-size: 0.8125rem;
  font-weight: 500;

  align-items: center;
  &::after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-left: 1.5px solid #999999;
    border-bottom: 1.5px solid #999999;
    transform: rotate(${(props) => props.deg}deg);
    margin-left: 10px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

const CommonSectionGridBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);

  gap: ${(props) => `${props.gridgap}px`};

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => {
        if (props.columns - 1 < 3) {
          return 2;
        } else {
          return props.columns - 1;
        }
      }},
      1fr
    );
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(
      ${(props) => {
        if (props.columns - 2 < 2) {
          return 2;
        } else {
          return props.columns - 2;
        }
      }},
      1fr
    );
  }
`;

const Button = styled.button`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  border: ${(props) => props.border};
`;

//productCard
const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8125rem;
  }
`;
const CardDesc = styled.p`
  font-size: 0.875rem;
  color: #555555;
  margin-top: 0.3rem;
  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
const CardBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.7rem;
  gap: 5px;
  & > img {
    width: auto;
  }
`;
const CardPrice = styled(CardBadge)`
  gap: 10px;
  margin-top: 0.5rem;

  & > .card-original-price {
    font-size: ${(props) => props.fontSize};
    text-decoration: ${(props) => props.decoration};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
  }
  & > .card-discounted-price {
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    & > .card-original-price {
      font-size: 0.75rem;
    }
    & > .card-discounted-price {
      font-size: 0.8125rem;
    }
  }
`;

const CardColor = styled.span`
  display: block;
  width: 20px;
  height: 5px;
  border: 1px solid #ddd;
  background-color: ${(props) => props.bg};
`;
const CardDiscountRate = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  font-weight: bold;
  z-index: 1;

  @media screen and (max-width: 480px) {
    top: 10px;
    left: 10px;
    font-size: 0.8125rem;
  }
`;
//reviewCard
const ReviewCardText = styled.div`
  & > .review-card-text-top {
    padding: 20px;

    & > .review-card-title {
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1rem;
      margin-bottom: 8px;
    }
    & > .review-card-content {
      display: -webkit-box;
      font-size: 0.8125rem;
      color: #555555;

      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 55px;
    }
  }
  & > .review-card-text-bottom {
    padding: 20px;
    border-top: 1px solid #eee;
    & > .review-card-star {
      margin-bottom: 10px;
      & img {
        width: auto;
      }
    }
    & > .review-card-date {
      font-size: 0.75rem;
      color: #777777;
    }
    & > .review-card-author {
      font-size: 0.875rem;
      color: #555555;
    }
  }
`;
export {
  CardTitle,
  SectionTitle,
  CardDesc,
  CardPrice,
  CardColor,
  CardBadge,
  CardDiscountRate,
  CommonSectionGridBox,
  ViewMoreCardButton,
  ReviewCardText,
  PagiTitle,
  Button,
  PagiSubTitle,
};
