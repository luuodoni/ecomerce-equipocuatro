"use client";
import { useState } from "react";

export default function Serch() {
  const [productFilter, setProductFilter] = useState([]);
  const [ListProduct, setListProcut] = useState([
    {
      title: "fds",
    },
    { title: "faaa" },
    { title: "mi madre es lo mejor" },
    { title: "mi perro es lo mejor" },
    { title: "mierda es lo mejor" },
  ]);
  let regex = /^[a-zñ]$/i;

  const SerchProduct = (e) => {
    let filtered = [];
    setProductFilter([]);
    let key = e.target.value[e.target.value.length - 1]


    if (key === undefined) {
      return setProductFilter(ListProduct)
    }

    
  

    for (let i = 0; i < ListProduct.length; i++) {
      let product = ListProduct[i];
      if (
        product.title.toLowerCase().indexOf(key.toLowerCase()) ==
        e.target.value.length - 1
      ) {
        filtered.push(product);
      }
    }

    setProductFilter(filtered);
  };

  return <input type="text" placeholder={"hola"} onChange={SerchProduct} />;
}
