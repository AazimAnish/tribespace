import "./Product.scss"
import React, { useState } from 'react'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
const Product = () =>{
    const [SelectedImg,setSelectedImg]=useState(0)
    const [quantity, setQuantity] = useState(0);
    const images = [
        "https://m.media-amazon.com/images/I/81Rui7dMg-L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61fy5sinuSL._AC_SS450_.jpg"
    ];
    return (

        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>

                </div>
                <div className="mainImg">
                    <img src={images[SelectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span>$199</span>
                <p>this is a great tool.</p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev=>prev===0?1:prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <ShoppingCartOutlinedIcon /> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderOutlinedIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceRoundedIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Rayamma</span>
                    <span>Prodyct Type: Bangles</span>
                    <span>Tag: Bangles, Wearables, Accessories</span>
                </div>
                <hr />
                <div className="details">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product