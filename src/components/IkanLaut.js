    import React from 'react'
    import '../style/Menu.css';
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
                <div className="judul-list-ikan">
                    <h2>Nama-nama Ikan Laut</h2>
                </div>
                <div className="item">
                {APIData.map(post =>
                (   <div className="item-con" key={post.id}>
                    <div className="item-container">
                        <img src={post.Img} alt="" />
                            <div className = "nama-ikan">
                                <h4>{post.Nama}</h4>
                                <h5>{post.NamaLatin}</h5>
                                <p>
                                Protein : {post.Protein} g <br/>
                                Kalori : {post.Kalori} kkal <br/>
                                Lemak : {post.Lemak} g <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )
    }




    export default IkanLaut;