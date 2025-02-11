import { AuthWrapper } from "@/components/layout";
import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // <main className="max-h-viewport overflow-y-auto">
    <AuthWrapper>{children}</AuthWrapper>
    // </main>
  );
};

export default AuthLayout;
