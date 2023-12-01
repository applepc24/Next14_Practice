import age from "./data.js";
import hi from "./hello.js";

export default function Cart() {
  return (
    <div>
      {hi}
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}
// 'use client' 는 유저 컴포넌트(자바스크립트 기능넣기 가능, 로딩속도 느림,hydration필요)

//서버 컴포넌트 (자바스크립트 기능 넣기 불가능,로딩속도 빠름, 검색엔진 노출 유리)
function CartItem(props) {
  return (
    <div className="cart-item">
      <p> {age}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
    