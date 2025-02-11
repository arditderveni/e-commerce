import { SectionHeader } from "@/components/common";
import { Banner, BrandContainer, ProductGrid } from "@/components/containers";
import Wrapper from "@/components/layout/wrapper";
import { Button } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Banner
        {...{
          text: "Welcome to the store",
          button: true,
          buttonText: "Shop Now",
          path: "/shop",
          className: "space-x-4",
        }}
      />
      <SectionHeader
        title="Checkout our featured products"
        breadcrumb={false}
        button={
          <Link href="/shop">
            <Button>
              More <ChevronRight />
            </Button>
          </Link>
        }
      />
      <Wrapper>
        <ProductGrid
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variant="home"
        />
      </Wrapper>

      <Banner text="Our featured Brands" />

      <BrandContainer />
    </React.Fragment>
  );
}
