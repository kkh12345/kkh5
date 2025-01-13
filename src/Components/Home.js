import BestItem from "./BestItem";
import CommonMainSection from "./CommonMainSection";
import MainVisual from "./MainVisual";
import CateGory from "./Category";
import BrandOnTv from "./BrandOnTv";
import HomeStylingItem from "./HomeStylingItem";
import BrandBanner from "./BrandBanner";
import Instagram from "./Instagram";
import EventBanner from "./EventBanner";
import ReviewMain from "./ReviewMain";

import { useEffect, useRef, useState } from "react";

const Home = ({ products, reviews }) => {
  const appearRef = useRef([]);
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let appearEl = document.querySelectorAll(".appear-down");
    appearEl.forEach((el, index) => {
      if (el.offsetTop < window.innerHeight) {
        if (el.classList.contains("appear-down")) {
          el.classList.replace("appear-down", "appear-up");
        }
      }
    });
    window.addEventListener("scroll", function () {
      appearEl.forEach((el, index) => {
        if (this.scrollY >= lastScrollY) {
          if (el.offsetTop - this.innerHeight * 0.7 < this.scrollY) {
            if (el.classList.contains("appear-down")) {
              el.classList.replace("appear-down", "appear-up");
            }
          }
        } else {
          if (this.scrollY + this.innerHeight <= el.offsetTop) {
            if (el.classList.contains("appear-up")) {
              el.classList.replace("appear-up", "appear-down");
            }
          }
        }
      });
      lastScrollY = this.scrollY;
    });
  }, []);
  return (
    <div className="home">
      <MainVisual></MainVisual>
      <CateGory></CateGory>
      <BestItem products={products !== null ? products : null}></BestItem>
      <CommonMainSection
        title={"NEW IN"}
        products={products !== null ? products : null}
      ></CommonMainSection>
      <BrandOnTv></BrandOnTv>
      <HomeStylingItem
        products={products !== null ? products : null}
      ></HomeStylingItem>
      <BrandBanner></BrandBanner>
      <CommonMainSection
        title={"INTERIOR"}
        products={products !== null ? products : null}
      ></CommonMainSection>
      <CommonMainSection
        title={"FUNITURE"}
        products={products !== null ? products : null}
      ></CommonMainSection>
      <Instagram></Instagram>
      <EventBanner></EventBanner>
      <ReviewMain
        products={products !== null ? products : null}
        reviews={reviews !== null ? reviews : null}
      ></ReviewMain>
    </div>
  );
};

export default Home;
