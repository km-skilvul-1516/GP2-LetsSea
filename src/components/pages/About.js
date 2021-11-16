import React from 'react';
import '../../App.css';
import '../../style/About.css'
import Footer from '../Footer';

import { Card } from 'react-bootstrap'

import image1 from '../../assets/rehan-fix-valid.jpg'
import image2 from '../../assets/nuri-fix-valid-satu.heic'
import image3 from '../../assets/frensi-fix-valid.jpeg'
import image4 from '../../assets/dinda-fix-valid.jpeg'

export default function About() {
  return (
    <div>
      <div>
        <div className='tentangdua'>
          <h1 className='white'>Tentang Let's Sea</h1>
          <h5 className='white'>
            Tentang Let's Sea adalah website yang dapat memberikan edukasi tentang jenis ikan berdasarkan habitatnya yaitu di Laut dan Air tawar serta memberikan wadah untuk dapat melakukan transaksi pembelian ikan. Let's Sea juga memiliki dua pemecahan masalah yang pertama adalah Menyediakan edukasi tentang jenis ikan berdasar habitatnya dalam bentuk list dan deskripsi dan yang kedua adalah menyediakan katalog ikan (deskripsi singkat, foto dan harga) yang nantinya dapat memfasilitasi pengguna untuk dapat melakukan transaksi pembelian ikan
          </h5>
        </div>
      </div>
      <div className='tentang'>
        
        <h3>Group 15</h3>
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
      <Footer></Footer>
    </div>
  );
}
