import React from "react";
import { Carousel } from 'react-bootstrap'
import './SectionTiga.css'

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
            className="d-block w-100"
            src={image1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>Luas wilayah laut Indonesia adalah luas lautan nya 5.076.800 kilometer persegi luas daratannya 1.904.569 kilometer persegi. Itu artinya 2/3 luas Indonesia adalah lautan. Laut Indonesia menjadi rumah dan jalur raya bagi 87 jenis mamalia laut. Di dalamnya termasuk kelompok paus, lumba-lumba dan dugong. Mamalia terbesar di bumi, Paus Biru juga berada di Indonesia. Selain mamalia, Indonesia juga menjadi pusat hidup bagi spesies elasmobranch atau ikan bertulang lunak seperti ikan hiu dan pari. Ada 596 jenis hiu dan pari, 157 diantaranya berada di Indonesia. Diantara ratusan jenis tersebut, Hiu Paus (Rhicodon typus) sebagai spesies ikan terbesar di dunia dan Pari Manta (Manta birostris) sebagai spesies pari terbesar di dunia berada di Indonesia. Keduanya diketahui berkembang biak di wilayah Papua seperti Raja Ampat.</h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Air merupakan sumber kehidupan bagi seluruh makhluk hidup yang ada di Bumi dan termasuk sumber daya alam yang tidak ada habisnya. Namun air yang banyak dikonsumsi oleh makhluk hidup mayoritas adalah air tawar, terutama bagi makhluk yang ada di daratan. Selain digunakan sebagai kebutuhan pokok individu, air juga dipergunakan untuk kepentingan lainnya, seperti pertanian, industri dan lainnya. negara Indonesia yang memiliki jumlah cadangan air tawar sebesar 2.019 km kubik. Besarnya produksi air tawar di Indonesia disumbang dari berbagai danau dan sungai yang ada. Selain itu, negara ini juga diuntungkan dengan iklim tropis yang membuatnya memiliki tingkat curah hujan tinggi dan luasnya hutan hujan tropis yang juga dapat menampung air hujan sebagai air tanah. </h5>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Indonesia merupakan penghasil komoditas perikanan laut terbesar kedua di dunia, setelah China. Menurut laporan FAO, sekitar 5,4 juta ton ikan diproduksi pada 2012 dengan potensi total produksi mencapai sekitar 9,93 juta ton. Namun, berdasarkan Keputusan Menteri Kelautan dan Perikanan No.47/2016, jumlah tangkapan yang diizinkan “hanya” mencapai 7,95 juta ton.</h5>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default SectionTiga;