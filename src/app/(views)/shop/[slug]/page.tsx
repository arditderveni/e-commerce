import { ProductView, ReviewsBlock } from "@/components/containers";
import React, { Fragment, use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = use(params).slug;

  return (
    <Fragment>
      {" "}
      <ProductView slug={slug} className="min-h-[50vh]" />
      <ReviewsBlock product={slug} />
    </Fragment>
  );
}
