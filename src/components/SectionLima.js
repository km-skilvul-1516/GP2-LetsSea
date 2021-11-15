import React from "react";
import '../style/SectionLima.css'
import image6 from '../assets/fresh-water-fish.jpg'

function SectionLima () {
    return(
        <div>
            <div className='bungkus'>
                <div className='bungkusSatu'>
                <h1>Ikan Air Tawar</h1>
                <h5>Ikan air tawar merupakan ikan yang dalam hal ini menghabiskan sebagian atau seluruh hidupnya di air tawar, misalnya sungai dan danau, yang dengan salinitas kurang dari 0,05%. Dalam banyak hal, lingkungan air tawar berbeda dengan lingkungan perairan laut dan yang paling membedakan ialah dari tingkat salinitasnya.</h5>
                </div>
                <img className='gambarlima' src={image6} alt='fresh water fish'></img>
            </div>
        </div>

        

        
    )
}

export default SectionLima;