import { useEffect, useState } from "react";
import { ListGroup, Button, Row, Col, Image } from "react-bootstrap";
// import { CartState } from "../context/Context"
import { CartState } from "../context/Context";

export default function Cart () {
    const {state : {cart}, dispatch} = CartState();

    const [total,setTotal] = useState();

    useEffect (() => {
        setTotal(cart.reduce((acc, curr) => acc +Number(curr.Harga*curr.qty),0))
    }, [cart] )

    return (
        <div className="home">
            <div className="productCart">
                <ListGroup>
                    {cart.map(prod => (
                        <ListGroup.Item key={prod.id}>
                            <Row>
                                <Col md={5}>
                                    <Image style={{ height:"150px", width : "700px"}} src={prod.Img} alt={prod.Nama} fluid rounded/>
                                </Col>
                                <Col md={4}>
                                    <span style={{fontWeight:"bold", fontSize: "20px"}}>{prod.Nama}</span> <br/>
                                    <span style ={{fontSize : "18px"}}>{prod.Kota}</span> <br/>
                                    <span style ={{fontSize : "18px"}}>{prod.Harga}.000</span> <br/> <br/>
                                    <button className="btn-hapus" onClick = {()=> {
                                        dispatch ({
                                            type: 'REMOVE_FROM_CART',
                                            payload: prod
                                        })
                                    }}>Hapus Dari Keranjang</button>
                                   
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="filters-summary">
                <form>
                    <label>Nama Penerima</label><br/> 
                    <input type ="text"></input><br/> <br/>
                    <label>Alamat Penerima</label><br/> 
                    <input type ="text"></input><br/> <br/>
                    <label>Nomor Handphone Penerima</label><br/> 
                    <input type ="number"></input> <br/> <br/>
                </form>
                <span>Total Pembelian Rp {total}.000</span> <br/><br/>
                <span className='title'>Jumlah Produk ({cart.length}) buah</span> <br/><br/>
                <button style= {{marginLeft:"200px", borderRadius: "5px"}}> 
                    Beli Sekarang
                </button>
            </div>
        </div>
    )
}


