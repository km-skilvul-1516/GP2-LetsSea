import React from 'react'
import '..style/Menu.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function IkanLaut() {
    console.log('IkanTawar')
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get("https://6188b1aad0821900178d74be.mockapi.io/IkanAirLaut")
            .then((response) => {
                console.log(APIData)
                setAPIData(response.data);
            })
    }, [])
    console.log(APIData)

    return (
        <div>
            <p>nama-nama ikan</p>
            {APIData.map(post =>
            (
                // <li key={post.id}></li>,
                <li> {post.Nama}, {post.Kota}</li>

            ))}
        </div>
    )
}


export default IkanLaut;