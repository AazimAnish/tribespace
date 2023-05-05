import React from 'react'
import './footer.scss'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Clothing</span>
                    <span>Food</span>
                    <span>Accessories</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                    Our website is dedicated to providing an immersive shopping experience for customers who are interested in unique, handcrafted tribal products. Our mission is to connect artisans from indigenous communities with buyers who appreciate the beauty and craftsmanship of their products.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Mail us at tribespace@gmail.com
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo"><img src="/img/Artboard.png" height="80px" width="200px" alt="" /></span>
                    <span className="copyright">
                        Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer