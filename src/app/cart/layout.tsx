import { ClearCartButton, SectionHeader } from "@/components/common";
import { Wrapper } from "@/components/layout";
import React, { Fragment } from "react";
interface Props {
  children: React.ReactNode;
}

const CartLayout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <SectionHeader title="Cart" breadcrumb button={<ClearCartButton />} />

      <Wrapper className="h-full">{children}</Wrapper>
    </Fragment>
  );
};

export default CartLayout;
