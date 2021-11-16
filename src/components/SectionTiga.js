import React from "react";
import { Carousel } from 'react-bootstrap'
import '../style/SectionTiga.css'

import image1 from '../assets/sea.jpg'
import image2 from '../assets/fresh-water.jpg'
import image3 from '../assets/fish.jpg'

function SectionTiga () {
    return (
        <div className="image-container">
            <h1>Fun Fact</h1>
    <Carousel>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100 gambarTiga"
            src={image1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5 className='tulislima'>Paus biru (Balaenoptera musculus) diyakini sebagai hewan terbesar di dunia yang pernah diketahui. Paus yang masuk dalam subordo paus tidak bergigi (paus berbalin) bisa mencapai panjang lebih dari 33 meter dan massa tubuh tercatat sebesar 181 ton.</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100 gambarTiga"
            src={image2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5 className='tulislima'>Penyu belimbing suka bermigrasi, beberapa berenang lebih dari 10.000 mil per tahun antara tempat bersarang dan mencari makan. Mereka juga penyelam ulung dengan rekor penyelaman terdalam mencapai hampir 4.000 kaki — lebih dalam dari kebanyakan mamalia laut.</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 gambarTiga" 
            src={image3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5 className='tulislimatiga'>Ubur-ubur tidak memiliki tulang, sehingga fosilnya sulit didapatkan oleh para peneliti. Namun demikian, para ilmuwan memiliki bukti bahwa makhluk ini terombang-ambing di Samudera dunia selama setidaknya 500 juta tahun.</h5>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default SectionTiga;