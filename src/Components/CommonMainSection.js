import { SectionTitle } from "../StyledComponent";
import ProductsCard from "./ProductsCard";
import { useEffect, useState } from "react";
import { CommonSectionGridBox, ViewMoreCardButton } from "../StyledComponent";
import { useMediaQuery } from "react-responsive";

const CommonMainSection = ({ products, title }) => {
  const isMobile = useMediaQuery({ query: "(max-width : 480px)" });
  const [contentArr, setContentArr] = useState(null);
  const [cardTextHover, setCardTextHover] = useState(true);
  const [gridGap, setGridGap] = useState(null);

  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    if (products !== null) {
      let filter = products.filter((product) => {
        return product.new === true;
      });
      if (title === "NEW IN") {
        filter = filter.slice(0, 6);
        setContentArr(filter);
        setCardTextHover(true);
        setGridGap(10);
      } else if (title === "INTERIOR") {
        filter = filter.slice(0, 8);
        setContentArr(filter);
        setCardTextHover(false);
        setGridGap(14);
      } else if (title === "FUNITURE") {
        filter = filter.slice(0, 8);
        setContentArr(filter);
        setCardTextHover(false);
        setGridGap(14);
      }
    }
  }, [products]);

  return (
    <section className="common-main-section">
      <div className="common-main-section-inner home-inner">
        <SectionTitle className="appear-down">
          {title}
          <a className="plus" href="#none">
            <i className="xi-plus"></i>
          </a>
        </SectionTitle>
        <CommonSectionGridBox
          className="appear-down"
          columns={contentArr !== null ? contentArr.length / 2 : null}
          gridgap={gridGap !== null ? gridGap : null}
        >
          {contentArr !== null
            ? contentArr.map((product, index) => {
                return (
                  <li
                    style={{
                      display: isMobile
                        ? viewMore
                          ? "flex"
                          : index > 3
                          ? "none"
                          : "flex"
                        : "flex",
                    }}
                    key={index}
                  >
                    <ProductsCard
                      hasCardIcons={title === "INTERIOR" ? true : false}
                      hasDiscountRate={true}
                      cardTextHover={cardTextHover}
                      product={product}
                    ></ProductsCard>
                  </li>
                );
              })
            : null}
        </CommonSectionGridBox>

        <ViewMoreCardButton
          onClick={() => {
            setViewMore(!viewMore);
          }}
          className="view-more-button appear-down"
          deg={viewMore ? 135 : -45}
        >
          <span>{viewMore ? "접기" : "더보기"}</span>
          <span></span>
        </ViewMoreCardButton>
      </div>
    </section>
  );
};
export default CommonMainSection;
