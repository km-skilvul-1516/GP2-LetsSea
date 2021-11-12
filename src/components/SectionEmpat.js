import React from "react";
import './SectionEmpat.css'
import image5 from '../assets/sea-fish.jpg'

function SectionEmpat () {
    return(
        <div>
            <div className='bungkus'>
                <img src={image5} alt='sea fish'></img>
                <div className='bungkusSatu'>
                <h1>Ikan Air Laut</h1>
                <h5>Ikan Air Laut adalah jenis ikan yang hidup di lautan dan aman atau biasa dikonsumsi oleh masyarakat. Ikan Laut memiliki jumlah spesies yang lebih banyak daripada ikan air tawar. Dan banyak yang meyakini kandungan gizi ikan laut pun lebih kompleks, daripada ikan-ikan yang hidup di sungai. Ikan Air Laut rasanya sangat lezat.</h5>
                </div>
            </div>
        </div>

        

        
    )
}

export default SectionEmpat;