import React, { useState, useEffect } from 'react';
import './List.scss';
import Card from '../Card/Card';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ulobuwxqwbruszgeonsk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsb2J1d3hxd2JydXN6Z2VvbnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEzMDEsImV4cCI6MTk5ODgwNzMwMX0.qRgmFEWxzrDgjB5pjYi8MfmbaAcRvJCI-f5ZPA3YYJE'
);


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

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*').order('id');
      if (error) console.log('Error fetching products:', error);
      else setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="list">
      {products?.map((product) => (
        <Card
          key={product.id}
          item={{
            id: product.id,
            img: product.imgURL,
            title: product.name,
            // isNew: false, // you can set this value according to your needs
            // oldPrice: product.oldPrice, // you can set this value according to your needs
            price: product.price,
          }}
        />
      ))}
    </div>
  );
};

export default List;
