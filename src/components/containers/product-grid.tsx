"use client";

import React from "react";
import { GridContainer } from "../layout";
import { ProductCard, HomeProductCard } from "../common";
import { cn } from "@/lib/utils";
import { useCartContext } from "@/hooks";

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
      colors: ["#000", "#fff", "#45110e", "#123456", "#abcdef"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
      wishListed: true,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "2",
      name: "Product 2",
      price: 200,
      image: "/images/product-2.jpg",
      colors: ["#000", "#fff", "#45110e", "#654321", "#fedcba"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
      wishListed: false,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "3",
      name: "Product 3",
      price: 300,
      image: "/images/product-3.jpg",
      colors: ["#000", "#fff", "#45110e", "#789abc", "#cba987"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
      ],
      wishListed: true,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "4",
      name: "Product 4",
      price: 400,
      image: "/images/product-4.jpg",
      colors: ["#000", "#fff", "#45110e", "#abcdef", "#123456"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
      wishListed: false,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "5",
      name: "Product 5",
      price: 500,
      image: "/images/product-5.jpg",
      colors: ["#000", "#fff", "#45110e", "#654321", "#fedcba"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 10 },
        { size: "L", stock: 5 },
      ],
      wishListed: false,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "6",
      name: "Product 6",
      price: 600,
      image: "/images/product-6.jpg",
      colors: ["#000", "#fff", "#45110e", "#789abc", "#cba987"],
      sizes: [
        { size: "S", stock: 20 },
        { size: "M", stock: 10 },
        { size: "L", stock: 0 },
      ],
      wishListed: false,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "7",
      name: "Product 7",
      price: 700,
      image: "/images/product-7.jpg",
      colors: ["#000", "#fff", "#45110e", "#abcdef", "#123456"],
      sizes: [
        { size: "S", stock: 10 },
        { size: "M", stock: 0 },
        { size: "L", stock: 5 },
      ],
      wishListed: false,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
    {
      id: "8",
      name: "Product 8",
      price: 800,
      image: "/images/product-8.jpg",
      colors: ["#000", "#fff", "#45110e", "#654321", "#fedcba"],
      sizes: [
        { size: "S", stock: 0 },
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
      ],
      wishListed: false,
      description: "This is a description",
      ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"],
      features: ["feature 1", "feature 2", "feature 3"],
    },
  ].splice(0, variant === "home" ? 4 : 8);

  return (
    <GridContainer
      className={cn("grid-cols-1 sm:grid-cols-2 md:grid-cols-3", className)}
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
