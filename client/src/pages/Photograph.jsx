import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Photograph.module.css'
import useCartStore from '../store/cartState';


const Photograph = () => {

    const [tyo, setTyo] = useState([]);
    const { cart, addToCart } = useCartStore();
    const [quantity, setQuantity] = useState(1);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/tokyo");
            const qData = response.data.map((item) => ({
                ...item,
                quantity: 1,    // axios로 받은 tokyo.json 데이터에 quantity라는 key를 value 1을 넣어서 추가했다.
            }))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(quantity - 1)
    }

    const displayImage = tyo.map((i) => {

        return (
            <div className={styles.pics}>
                <img src={i.uri} className={styles.image} />
                <p>No.{i.id}</p>
                <p>Price:{i.price}</p>
                <div className={styles.addSub}>
                    <button onClick={decreaseQuantity}>-</button>
                    <input size='2' style={{ textAlign: "center" }} value={i.quantity} />
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={() => addToCart(i)}>ADD TO CART</button>
            </div>
        )
    })



    return (
        <div className={styles.container}>
            {displayImage}
        </div>
    )
}

export default Photograph


// 각각의 img태그 아이템에 수량변경과 장바구니 추가 button이 필요하다.
// 수량 변경 button 은 최소값을 1로 지정한다.
// 수량 변경을 img 태그 각각 따로 동작하게 한다. -> 이 말은 모든 img 태그에 대해서 각자의 state가 필요함.
// 공통의 state 를 쓰는게 아닌 각각의 img 태그들이 각자의 변수를 담을 곳을 만들어야한다. item 에 quantity 키를 추가하고 거기에 담는다.

