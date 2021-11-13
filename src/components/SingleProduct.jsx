import { CartState } from "../context/Context";
import "../style/style.css"


export default function SingleProduct ({prod}) {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    
    console.log(prod)
    return (
        <div className ="products">
           <div className="all">
               <img  src ={prod.Img} alt= {prod.Nama}/>
                <div>
                   <p className="judul">{prod.Nama}</p>
                   <p className="kota">
                        <span >Pengiriman dari Kota{prod.Kota} </span>
                   </p>
                   <p className="hargaa">
                        <span>Rp {prod.Harga}.000</span>
                   </p >
                   {cart.some(p=>p.id===prod.id)?(
                     <button  onClick = {()=> {
                        dispatch ({
                            type: 'REMOVE_FROM_CART',
                            payload: prod
                        })
                    }}
                     
                     className="hapus">
                        Hapus
                    </button>
                   ):(
                    <button className="bbeli"onClick = {()=> {
                        dispatch ({
                            type: 'ADD_TO_CART',
                            payload: prod
                        })
                    }} >
                    Beli
                    </button>
                   )}
                  
                </div>
           </div>
              
        </div>
    )
}