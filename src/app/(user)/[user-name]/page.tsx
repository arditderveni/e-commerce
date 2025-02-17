import { UserDetails } from "@/components/containers";
import { Wrapper } from "@/components/layout";
import React from "react";

const User: React.FC = () => {
  return (
    <Wrapper>
      <UserDetails
        user={{
          name: "John Doe",
          email: "jdoe@test.com",
          avatar: "",
          id: 1,
        }}
      />
    </Wrapper>
  );
};

export default User;
