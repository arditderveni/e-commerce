import { SectionHeader } from "@/components/common";
import { Banner } from "@/components/containers";
import React, { Fragment } from "react";

function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Banner
        {...{
          text: "Checkout our latest collection",
        }}
      />
      <SectionHeader
        title="Shop"
        breadcrumb={true}
        className="bg-header mt-2"
      />
      {children}
    </Fragment>
  );
}

export default ShopLayout;
