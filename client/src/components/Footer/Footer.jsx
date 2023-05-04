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
                        We sell tribal products.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Mail us at tribalary@gmail.com
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">TribalSpace</span>
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