"use client";

import { ProductView, ReviewsBlock } from "@/components/containers";
import React, { Fragment, useEffect, useState } from "react";

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

const reviews = [
  {
    id: "1",
    user: { name: "John Doe", email: "johndoes@test.test", avatar: "", id: 1 },
    rating: 5,
    comment: "Great product!",
    date: new Date("2023-10-01"),
    description: "This is a great product. I would recommend it to anyone.",
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      email: "janesmith@test.tes",
      avatar: "",
      id: 2,
    },
    rating: 4,
    comment: "Very useful and well made.",
    date: new Date("2023-10-02"),
    description:
      "I have been using this product for a while now and it has been very useful. I would recommend it to anyone.",
  },
  {
    id: "3",
    user: {
      name: "Alice Johnson",
      email: "alicejohnosn@test.test",
      avatar: "",
      id: 3,
    },
    rating: 3,
    comment: "It's okay, but could be better.",
    date: new Date("2023-10-03"),
    description:
      "This product is okay, but it could be better. I would recommend it to anyone.",
  },
];

const Page = () => {
  const [product, setProduct] = useState<Product>(emptyProduct);

  useEffect(() => {
    const data = localStorage.getItem("product");
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, []);

  return (
    <Fragment>
      {" "}
      <ProductView product={product as Product} className="min-h-[50vh]" />
      <ReviewsBlock reviews={reviews} />
    </Fragment>
  );
};

export default Page;
