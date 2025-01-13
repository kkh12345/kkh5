import "./Lookbook.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PagiTitle } from "../StyledComponent";
const Lookbook = ({ products }) => {
  const LookbookRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(null);
  useEffect(() => {
    LookbookRef.current.parentElement.children[0].style.position = "relative";
  }, []);

  return (
    <div ref={LookbookRef} className="lookbook">
      <div className={`lookbook-slide-modal ${showModal ? "show" : null}`}>
        <button
          className="lookbook-modal-close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <i className="xi-close"></i>
        </button>
        <div className="lookbook-slide-modal-inner">
          <button
            className="slide-prev"
            onClick={() => {
              if (modalImgIndex === 0) {
                setModalImgIndex(0);
              } else {
                setModalImgIndex(modalImgIndex - 1);
              }
            }}
          ></button>
          <button
            className="slide-next"
            onClick={() => {
              if (modalImgIndex === products.length - 1) {
                setModalImgIndex(products.length - 1);
              } else {
                setModalImgIndex(modalImgIndex + 1);
              }
            }}
          ></button>
          <div className="lookbook-slide-img-wrap">
            <img
              src={
                modalImgIndex !== null
                  ? products[modalImgIndex].productImg
                  : null
              }
              alt={modalImgIndex !== null ? products[modalImgIndex].name : null}
            />
          </div>
        </div>
      </div>
      <div className="lookbook-inner home-inner">
        <PagiTitle>Lookbook</PagiTitle>
        <ul className="lookbook-grid-container">
          {products !== null
            ? products.map((product, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      setShowModal(true);
                      setModalImgIndex(index);
                    }}
                  >
                    <a href="#none">
                      <img src={product.productImg} alt={product.name} />
                    </a>
                    <div className="lookbook-product-hover">{product.name}</div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Lookbook;
