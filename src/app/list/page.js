export default function List() {
  let 상품 = [
    { name: "토마토", price: "₩1,5000,000" },
    { name: "파스타", price: "₩1,400.000" },
    { name: "코코넛", price: "₩1,3000,000" },
  ];

  return (
    <div>
      5<h4 className="title">상품목록</h4>
      {상품.map((product, i) => {
        return (
          <div className="food" key={i}>
            <img src={`food${i}.png`} className="food-img" />
            <h4>
              {product.name} {product.price}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
