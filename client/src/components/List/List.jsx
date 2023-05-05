import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
import Incensestick from "../../assets/images/incense-min.jpg"


const List = () => {
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
            img:"https://www.mastergardenproducts.com/solidbamboochair.jpg",
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
        <div className="list">{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}

export default List