"use client";

import React from "react";
import GridContainer from "../layout/grid-container";
import ProductCard from "../common/product-card";
import { cn } from "@/lib/utils";
import useCartContext from "@/hooks/use-cart-context";
interface Props {
  className?: string;
}

const ProductGrid: React.FC<Props> = ({ className }) => {
  const { addItem } = useCartContext();

  const products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      image: "/images/product-1.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
    },
    {
      id: "2",
      name: "Product 2",
      price: 200,
      image: "/images/product-2.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
    },
    {
      id: "3",
      name: "Product 3",
      price: 300,
      image: "/images/product-3.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
      ],
    },
    {
      id: "4",
      name: "Product 4",
      price: 400,
      image: "/images/product-4.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
    },
    {
      id: "5",
      name: "Product 5",
      price: 500,
      image: "/images/product-5.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
    },
    {
      id: "6",
      name: "Product 6",
      price: 600,
      image: "/images/product-6.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 20 },
        { size: "M", stock: 10 },
        { size: "L", stock: 0 },
      ],
    },
    {
      id: "7",
      name: "Product 7",
      price: 700,
      image: "/images/product-7.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 10 },
        { size: "M", stock: 0 },
        { size: "L", stock: 5 },
      ],
    },
    {
      id: "8",
      name: "Product 8",
      price: 800,
      image: "/images/product-8.jpg",
      colors: ["#000", "#fff", "#45110e"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
      ],
    },
  ];

  return (
    <GridContainer
      className={cn(
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} addItem={addItem} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
