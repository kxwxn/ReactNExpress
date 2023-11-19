import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Photograph.module.css'
import useCartStore from '../store/cartState'

const Photograph = () => {
    const { cart, addToCart } = useCartStore();
    const [quantity, setQuantity] = useState({});


    const [uri, setUri] = useState([])

    const fetchData = () => {
        axios.get('http://localhost:4000/api/tokyo').then((response) => {
            setUri(response.data)
            setQuantity(response.data.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {}))
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const openImageInNewTab = (url) => {
        window.open(url, '_blank')
    };



    const displayImage = uri.map((item) => {
        const quantities = quantity[item.id] || 1

        return (<div className={styles.pics} key={item.id} >
            <img src={item.uri} className={styles.image} onClick={() => openImageInNewTab(item.uri)} />
            <p>No.{item.id}</p>
            <p>{item.price}</p>
            <button onClick={() => setQuantity({ ...quantity, [item.id]: Math.max(1, quantities - 1) })}>-</button>
            <input value={quantities} size="2" style={{ textAlign: "center" }} />
            <button onClick={() => setQuantity({ ...quantity, [item.id]: quantities + 1 })} >+</button>
            <p><button type="button" onClick={() => addToCart({ ...item, quantity: quantities })}>add to cart</button></p>
        </div>)
    })

    return (
        <div className={styles.container}>
            {displayImage}
        </div>
    )
}

export default Photograph


