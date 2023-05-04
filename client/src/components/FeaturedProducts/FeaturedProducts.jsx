import React from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card";
import jwelleryImg from '../../assets/images/product_img/jwellery.webp';


const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compresss&cs=tinysrgb&w=1600",
            img2:"https://arteastri.com/cdn/shop/products/j8_2_1fbac654-70e7-495f-8065-a82cbd24b54f_1024x1024@2x.jpg?v=1673708934",
            title: "Handmade Bamboo Jwellery Set",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://s3.amazonaws.com/megastores-prod-bucket/images/product-images/CO-Handicrafts_&_Fashion/SE-Jewellery/CA-Bangles/CMSA-ZSH8-7VAI-B020/real-images/Dokra%20Art%20Adjustable%20Handcrafted%20Tribal%20Bangle%20001%20by%20Arteastic1651830242100.jpg",
            title:"Bangles",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"https://universaltribes.com/cdn/shop/products/Small_Bamboo_mug_3in.jpg?v=1679555214",
            title:"Cup",
            isNew:true,
            oldPrice:24,
            price:27,
        },
        {
            id:4,
            img:"https://cdn.shopify.com/s/files/1/0267/2528/6085/products/TribalForestHoneyRoyalBeeBrothersImmunityBoosterproduct.jpg?v=1681048409",
            title:"Honey",
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
