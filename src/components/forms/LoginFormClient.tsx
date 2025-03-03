"use client";

import { dynamicFormRender } from "@/lib/utils";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

/**
 * LoginFormClient component renders a login form with email and password fields.
 * It uses `useForm` hook from `react-hook-form` with `zodResolver` for validation.
 *
 * @component
 * @param {LoginFormProps} props - The props for the LoginFormClient component.
 * @param {function} props.onSubmit - The function to handle form submission.
 *
 * @returns {JSX.Element} The rendered login form component.
 *
 * @example
 * <LoginFormClient onSubmit={handleLogin} />
 */
const LoginFormClient: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const inputs = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  return dynamicFormRender({
    form,
    inputs,
    submitText: "Login",
    submitHandler: onSubmit,
    className: "shadow-md p-4",
  });
};

LoginFormClient.displayName = "LoginFormClient";

export default LoginFormClient;
