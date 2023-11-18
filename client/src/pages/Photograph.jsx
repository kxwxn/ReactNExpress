import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Photograph.module.css'
import useCartStore from '../store/cartState'

const Photograph = () => {
    const { cart, addToCart } = useCartStore();

    const [uri, setUri] = useState([])

    const fetchData = () => {
        axios.get('http://localhost:4000/api/tokyo').then((response) => {
            setUri(response.data)
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const openImageInNewTab = (url) => {
        window.open(url, '_blank')
    };



    const displayImage = uri.map((item) => {
        return (<div className={styles.pics} key={item.id} >
            <img src={item.uri} className={styles.image} onClick={() => openImageInNewTab(item.uri)} />
            <p>No.{item.id}</p>
            <p>{item.price}</p>
            <button type="button" onClick={() => addToCart(item)}>add to cart</button>
        </div>)
    })

    return (
        <div className={styles.container}>
            {displayImage}
        </div>
    )
}

export default Photograph


