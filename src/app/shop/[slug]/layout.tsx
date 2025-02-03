import { Wrapper } from "@/components/layout";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
