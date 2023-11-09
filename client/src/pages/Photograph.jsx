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

    const displayImage = uri.map((item) => {
        return (<div key={item.id}>
            <img src={item.uri} />
        </div>)
    })

    return (
        <div>
            {displayImage}
        </div>
    )
}

export default Photograph