import "./ContentTable.css";

const ContentTable = ({ reviews, products }) => {
  return (
    <div className="content-table">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품정보</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
            <th>평점</th>
          </tr>
        </thead>
        <tbody>
          {reviews !== null
            ? reviews.map((review, index) => {
                let findProduct = -1;
                if (review.productId !== null) {
                  findProduct = products.find((product) => {
                    return product.productId === review.productId;
                  });
                }

                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>
                      {findProduct === -1 ? (
                        <a
                          href="#none"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            style={{ objectFit: "contain" }}
                            src="/img/home/logo.png"
                            alt="로고"
                          />
                        </a>
                      ) : (
                        <>
                          <a href={`/reviewDetail/${index}`}>
                            <img
                              src={findProduct.productImg}
                              alt={findProduct.name}
                            />
                          </a>
                          <span>{findProduct.name}</span>
                        </>
                      )}
                    </td>
                    <td>
                      <a href={`/reviewDetail/${index}`}>
                        {review.reviewTitle}
                      </a>
                    </td>
                    <td>
                      <span>{review.author}</span>
                    </td>
                    <td>
                      <span>{review.date}</span>
                    </td>
                    <td>{review.viewCount}</td>
                    <td>
                      <img
                        src={`/img/home/star${review.star}.png`}
                        alt="평점"
                      />{" "}
                    </td>
                  </tr>
                );
              })
            : null}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default ContentTable;
