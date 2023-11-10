import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Photograph.module.css'

const Photograph = () => {
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
        return (<div className={styles.pics} key={item.id} onClick={() => openImageInNewTab(item.uri)}>
            <img src={item.uri} className={styles.image} />
        </div>)
    })

    return (
        <div className={styles.container}>
            {displayImage}
        </div>
    )
}

export default Photograph