import { Button, Dropdown, Badge } from "react-bootstrap";
import {Link} from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { CartState } from "../context/Context";
import {AiFillDelete} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import "../style/style.css"
import "../style/navbar.css"

export default function Header () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const {state: { cart }, dispatch} = CartState();

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
            <Dropdown  style={{marginRight: "40px"}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle >

                <Dropdown.Menu style={{ minWidth: 350}}>
                    {cart.length>0? (
                         <>
                            {cart.map((prod) => (
                            <span className="cartitem" key={prod.id}>
                                <img
                                src={prod.Img}
                                className="cartItemImg"
                                alt={prod.Nama}
                                style = {{height :"5px"}}
                                />
                                <div className="cartItemDetail">
                                <span>{prod.Nama}</span>
                                <span>Rp {prod.Harga}.000</span>
                                </div>
                                <AiFillDelete
                                fontSize="20px"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                    })
                                }
                                />
                            </span>
                            ))}
                            <Link to="/cart">
                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                Go To Cart
                            </Button>
                            </Link>
                        </>
                    ): 
                    (<span style= {{padding: 10}}> Cart is Empty</span>)}
                    
                </Dropdown.Menu>
                </Dropdown>
            <button className="masuk">Sign Up</button>
            </div>
        </nav>
        </>
    );
}