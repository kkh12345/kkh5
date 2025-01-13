import { useEffect, useState } from 'react';
import './HomeStylingItem.css';
import ProductsCard from './ProductsCard';
import { SectionTitle } from '../StyledComponent';

const HomeStylingItem = ({ products }) => {
  const [tapObj, setTapObj] = useState(null);
  const [tapContent, setTapContent] = useState(null);
  const [tapMenuActive, setTapMenuActive] = useState(null);
  useEffect(() => {
    if (products !== null) {
      setTapObj({
        deco: products.slice(5),
        tableWear: products.slice(0, 8),
        frame: [...products.slice(-4), ...products.slice(-8, -4)],
        flowerVase: [...products.slice(-6, -2), ...products.slice(-13, -9)],
      });
    }
  }, [products]);
  useEffect(() => {
    if (tapObj !== null) {
      setTapContent(tapObj.deco);
      setTapMenuActive(
        Array(Object.keys(tapObj).length)
          .fill(false)
          .map((a, i) => {
            if (i === 0) {
              a = true;
            } else {
              a = false;
            }
            return a;
          })
      );
    }
  }, [tapObj]);
  return (
    <section className="home-styling-item ">
      <div className="home-styling-item-inner home-inner">
        <SectionTitle className="appear-down">
          <span className="underline ">HOME STYLING ITEM</span>
        </SectionTitle>
        <ul className="home-styling-tap-menu appear-down">
          {tapObj !== null
            ? Object.entries(tapObj).map((a, index) => {
                return (
                  <li
                    className={
                      tapMenuActive !== null
                        ? tapMenuActive[index]
                          ? 'active'
                          : null
                        : null
                    }
                    key={index}
                    onClick={(e) => {
                      setTapContent(a[1]);
                      if (tapMenuActive !== null) {
                        let activeMap = tapMenuActive.map((a, j) => {
                          if (index === j) {
                            a = true;
                          } else {
                            a = false;
                          }
                          return a;
                        });
                        setTapMenuActive(activeMap);
                      }
                    }}
                  >
                    {a[0] === 'flowerVase' ? 'FLOWER VASE' : a[0].toUpperCase()}
                  </li>
                );
              })
            : null}
        </ul>
        <ul className="home-styling-tap-content appear-down">
          {tapContent !== null
            ? tapContent.map((product, index) => {
                return (
                  <li key={index}>
                    <ProductsCard
                      product={product}
                      hasCardIcons={false}
                      cardTextHover={true}
                      hasDiscountRate={true}
                    ></ProductsCard>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </section>
  );
};
export default HomeStylingItem;
