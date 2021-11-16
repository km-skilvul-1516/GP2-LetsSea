import React from 'react';
import '../style/Cards.css';
import CardItem from './CardItem';

import image1 from '../assets/img-10.jpg'
import image2 from '../assets/img-11.jpg'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src={image1}
              text='List edukasi tentang Ikan Air Laut dan Ikan Air Tawar'
              label='EDUKASI'
              path='/edukasi'
            />
            <CardItem
              src={image2}
              text='Tempat bertransaksi segala jenis ikan Air Laut dan Ikan Air Tawar'
              label='TRANSAKSI'
              path='/transaksi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
