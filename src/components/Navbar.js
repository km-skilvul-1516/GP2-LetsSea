import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='ininavbar'>
        <div className='ininavbarcontainer'>
          <Link to='/' className='ininavbarlogo' onClick={closeMobileMenu}>
            Let's Sea
          </Link>
          <div className='inimenuicon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'ininavmenu active' : 'ininavmenu'}>
            <li className='ininavitem'>
              <Link to='/' className='ininavlinks' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='ininavitem'>
              <Link
                to='/edukasi'
                className='ininavlinks'
                onClick={closeMobileMenu}
              >
                Edukasi
              </Link>
            </li>
            <li className='ininavitem'>
              <Link
                to='/transaksi'
                className='ininavlinks'
                onClick={closeMobileMenu}
              >
                Transaksi
              </Link>
            </li>
            <li className='ininavitem'>
              <Link
                to='/about'
                className='ininavlinks'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          </ul>
          <button className="masuk">Sign Up</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
