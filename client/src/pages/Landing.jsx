import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Landing.module.css';

const Landing = () => {

    const [pictures, setPictures] = useState([]);

    const fetchData = () => {
        axios.get('http://localhost:4000/api/landing').then((response) => {
            setPictures(response.data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const displayImage = pictures.map((item) => {
        return (
            <div>
                <img src={item.uri} />
            </div>
        )
    });


    return (
        <div>
            {displayImage}
        </div>

    )
};


export default Landing