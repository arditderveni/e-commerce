"use client";

import React from "react";
import { GridContainer } from "../layout";
import { ProductCard } from "../common";
import { cn } from "@/lib/utils";
import { useCartContext } from "@/hooks";
import HomeProductCard from "../common/home-product-card";

interface Props {
  className?: string;
  variant: "home" | "shop";
}

const ProductGrid: React.FC<Props> = ({ className, variant }) => {
  const { addItem } = useCartContext();

  //@ts-expect-error - This is a mock data
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
      wishListed: true,
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
      wishListed: false,
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
      wishListed: true,
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
      wishListed: false,
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
      wishListed: false,
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
      wishListed: false,
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
      wishListed: false,
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
      wishListed: false,
    },
  ].splice(0, variant === "home" ? 4 : 8);

  return (
    <GridContainer
      className={cn(
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {products.map((product) =>
        variant === "shop" ? (
          <ProductCard
            key={product.id}
            {...product}
            addItem={addItem}
            variant={variant}
          />
        ) : (
          <HomeProductCard
            key={product.id}
            {...product}
            addItem={addItem}
            variant="home"
            className="w-full"
          />
        )
      )}
    </GridContainer>
  );
};

export default ProductGrid;
