import { SectionHeader } from "@/components/common";
import { Banner, ProductGrid } from "@/components/containers";
import React, { Fragment } from "react";

const SingleBrand: React.FC = () => {
  return (
    <Fragment>
      <Banner
        {...{
          text: "Brand",
        }}
      />

      <SectionHeader
        {...{
          title: "Brand Products",
          breadcrumb: true,
        }}
      />

      <ProductGrid
        {...{
          variant: "shop",
        }}
      />
    </Fragment>
  );
};

export default SingleBrand;
