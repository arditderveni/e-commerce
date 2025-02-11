import dynamic from "next/dynamic";
import React from "react";
import { LoginSkeleton } from "../skeletons";

const LoginFormClient = dynamic(() => import("./LoginFormClient"), {
  loading: () => <LoginSkeleton />,
});

const LoginForm: React.FC = () => {
  const onSubmit = async (data: LoginFormData) => {
    "use server";
    console.log("Login data : ", data);
  };

  return <LoginFormClient onSubmit={onSubmit} />;
};

LoginForm.displayName = "LoginForm";

export default LoginForm;
