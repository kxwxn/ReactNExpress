import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Photograph.module.css";
import useCartStore from "../store/cartState";

const Photograph = () => {
  const { addToCart } = useCartStore();
  const [picture, setPicture] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tokyo");
      setPicture(
        response.data.map((rawData) => ({ ...rawData, quantity: 1 }))
        // 원래 배열의 요소들인 개체들을 펼친다음에 quantity 라는 속성을 주고 1의 값을준다.
      );
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayImages = picture.map((i, index) => {
    // <button onClick={add}>같은 요소의 구별이 없는 경우 map의 두번째 인자로 index를 주면 렉시컬 환경에 저장이 되어서 각 콜백함수마다 구별점이 생긴다.

    const subtract = () => {
      setPicture(
        picture.map((item, itemIndex) =>
          itemIndex === index && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };
    // const subtract = () => {
    //     setPicture(picture.map(item => ({ ...item, quantity: item.quantity - 1 })));
    //   } --> 문제의 함수, 전체 quantity를 변경한다.

    const add = () => {
      setPicture(
        picture.map((item, itemIndex) =>
          itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
    // index에 현재 onClick={add} 이벤트가 일어난 태그의 인덱스가 있다
    // 그리고 add 함수 블록 내에서 다시 map으로 전체 배열이 그려지는데
    // 그 배열 하나 하나를 index 와 비교를 하고 이벤트가 일어난 itemIndex가 같으면 quantity를 추가한다.

    return (
      <div className={styles.pics}>
        <img src={i.uri} className={styles.image} />
        <p>No.{i.id}</p>
        <p>{i.price}</p>
        <p>
          <button onClick={subtract}>-</button>
          <input size="2" style={{ textAlign: "center" }} value={i.quantity} />
          <button onClick={add}>+</button>
        </p>
        <p>index:{index}</p>
        <button onClick={() => addToCart(i)}>ADD TO CART</button>
      </div>
    );
  });

  return <div className={styles.container}>{displayImages}</div>;
};

export default Photograph;

// 각각의 img태그 아이템에 수량변경과 장바구니 추가 button이 필요하다.
// 수량 변경 button 은 최소값을 1로 지정한다.
// 수량 변경을 img 태그 각각 따로 동작하게 한다. -> 이 말은 모든 img 태그에 대해서 각자의 state가 필요함.
// 공통의 state 를 쓰는게 아닌 각각의 img 태그들이 각자의 변수를 담을 곳을 만들어야한다. item 에 quantity 키를 추가하고 거기에 담는다.
