import { Wrapper } from "@/components/layout";
import React from "react";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default UserLayout;
