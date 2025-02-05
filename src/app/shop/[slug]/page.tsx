"use client";

import { ProductView } from "@/components/containers";
import React, { useEffect, useState } from "react";

const emptyProduct = {
  id: "",
  name: "",
  price: 0,
  image: "",
  colors: [],
  sizes: [],
  wishListed: false,
  description: "",
  ingredients: [],
  features: [],
};

const Page = () => {
  const [product, setProduct] = useState<Product>(emptyProduct);

  useEffect(() => {
    const data = localStorage.getItem("product");
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, []);

  return <ProductView product={product as Product} className="min-h-[50vh]" />;
};

export default Page;
