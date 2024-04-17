import React, { useEffect, useState } from "react";
import Card from "./Card";

function CardHandler() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(data=>data.json())
        .then(res=>{
            
                setProducts(res.products)
                console.log(res);
        })

  },[])
  const remove=(active)=>{
    const lcounter=products.filter(item=>item!==active);
    setProducts(lcounter)

  }
  return (
    <div className="d-flex m-3 gap-3 flex-wrap">
      {products.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          brand={item.brand}
          category={item.category}
          thumbnail={item.thumbnail}
          price={item.price}
          stock={item.stock}
          remove={()=>remove(item)}
        />
      ))}
    </div>
  );
}

export default CardHandler;
