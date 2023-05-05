import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card";
import image1 from './janos-venczak.jpg'
import bangles from '../../assets/images/product_img/wooden_horse.jpg'
const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img:image1,
            title: "Handmade Bamboo Jwellery Set",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:bangles,
            title:"Wooden Horse Toy",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"https://universaltribes.com/cdn/shop/products/Small_Bamboo_mug_3in.jpg?v=1679555214",
            title:"Bamboo Cup",
            isNew:true,
            oldPrice:250,
            price:27,
        },
        {
            id:4,
            img:"https://cdn.shopify.com/s/files/1/0267/2528/6085/products/TribalForestHoneyRoyalBeeBrothersImmunityBoosterproduct.jpg?v=1681048409",
            title:"Natural Tribal Honey",
            isNew:true,
            oldPrice:26,
            price:30,
        },
    ];
    return (
        <div className='FeaturedProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    These are handcrafted natural accessories made by tribal people.
                </p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    ) 
}

export default FeaturedProducts
