import React from 'react'
import "./Cart.scss"

const Cart=()=>{
    const data = [
        {
            id:1,
            img: `${process.env.PUBLIC_URL}https://images.unsplash.com/photo-1496325823264-7cdf2ea4f0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80`,
            img2:"",
            title: "Incense Sticks",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img:"",
            title:"Junglee Chair",
            isNew:true,
            oldPrice:19,
            price: 12,
        },
        {
            id: 3,
            img:"",
            title:"Junglee Hair Oil",
            isNew:true,
            oldPrice:19,
            price: 12,
        },
        {
            id: 4,
            img:"",
            title:"Body Oil",
            isNew:true,
            oldPrice:19,
            price: 12,
        },
        {
            id: 5,
            img:"",
            title:"Body Oil",
            isNew:true,
            oldPrice:19,
            price: 12,
        },
    ];

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0,100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart