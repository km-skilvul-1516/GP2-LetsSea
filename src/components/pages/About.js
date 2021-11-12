import React from 'react';
import '../../App.css';
import '../../style/About.css'
import { Card } from 'react-bootstrap'

import image1 from '../../assets/rehan-fix-valid.jpg'
import image2 from '../../assets/nuri-fix-valid-satu.heic'
import image3 from '../../assets/frensi-fix-valid.jpeg'
import image4 from '../../assets/dinda-fix-valid.jpeg'

export default function About() {
  return (
    <div>
      <div className='tentang'>
        <h3>About Us</h3>
        <div className='kumpulan-kartu'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
        <Card.Title className='namaabout'>Frensi</Card.Title>
        <Card.Text className='namaabout'>
          Mahasiswi | Android Developer
        </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
        <Card.Title className='namaabout'>Nuri</Card.Title>
        <Card.Text className='namaabout'>
          Mahasiswi | Backend Developer
        </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image4} />
        <Card.Body>
        <Card.Title className='namaabout'>Dinda</Card.Title>
        <Card.Text className='namaabout'>
          Mahasiswi | Fish Expert
        </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
        <Card.Title className='namaabout'>Raihan</Card.Title>
        <Card.Text className='namaabout'>
          Mahasiswa | Frontend Developer
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
}
