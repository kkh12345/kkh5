import './Category.css';
const CateGory = () => {
  const searchKeywords = ["MD'S PICK", '옷장/수납장', '거실가구', '주방용품'];
  return (
    <section className="category ">
      <div className="category-inner home-inner ">
        <ul className="search-keyword appear-down">
          {searchKeywords.map((keyword, index) => {
            return (
              <li key={index}>
                <a href="#none">{keyword}</a>
              </li>
            );
          })}
        </ul>
        <ul className="category-grid-box appear-down">
          <li className="category-chair">
            <img src="img/home/cate-chair.jpg" alt="의자" />
            <a href="#none">CHAIR</a>
          </li>
          <li className="category-table">
            <img src="img/home/cate-table.jpg" alt="테이블" />
            <a href="#none">TABLE</a>
          </li>
          <li className="category-kitchen">
            <img src="img/home/cate-kitchen.jpg" alt="키친" />
            <a href="#none">KITCHEN</a>
          </li>
          <li className="category-sofa">
            <img src="img/home/cate-sofa.jpg" alt="소파" />
            <a href="#none">SOFA</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default CateGory;
