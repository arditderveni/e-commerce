import { AppHeader } from "@/components/global";
import { Wrapper } from "@/components/layout";
import React, { Fragment } from "react";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <AppHeader />
      <Wrapper>{children}</Wrapper>
    </Fragment>
  );
};

export default UserLayout;
