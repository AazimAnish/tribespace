import React, { useState, useEffect } from 'react';
import './List.scss';
import Card from '../Card/Card';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ulobuwxqwbruszgeonsk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsb2J1d3hxd2JydXN6Z2VvbnNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEzMDEsImV4cCI6MTk5ODgwNzMwMX0.qRgmFEWxzrDgjB5pjYi8MfmbaAcRvJCI-f5ZPA3YYJE'
);


const List = () => {
  const [products, setProducts] = useState([]);

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
