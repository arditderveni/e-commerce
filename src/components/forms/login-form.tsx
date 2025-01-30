import React from "react";
import LoginFormClient from "./LoginFormClient";

const LoginForm: React.FC = () => {
  const onSubmit = async (data: LoginFormData) => {
    "use server";
    console.log("Login data : ", data);
  };

  return <LoginFormClient onSubmit={onSubmit} />;
};

LoginForm.displayName = "LoginForm";

export default LoginForm;
