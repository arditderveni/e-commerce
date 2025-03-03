import dynamic from "next/dynamic";
import React from "react";
import { LoginSkeleton } from "../skeletons";

const LoginFormClient = dynamic(() => import("./LoginFormClient"), {
  loading: () => <LoginSkeleton />,
});

/**
 * LoginForm component.
 *
 * This component renders a login form and handles the form submission.
 *
 * @component
 * @returns {JSX.Element} The rendered login form component.
 *
 * @example
 * // Usage example:
 * <LoginForm />
 *
 * @remarks
 * The `onSubmit` function is an asynchronous function that handles the form submission.
 * It logs the login data to the console.
 *
 * @async
 * @function onSubmit
 * @param {LoginFormData} data - The data submitted from the login form.
 */
const LoginForm: React.FC = () => {
  const onSubmit = async (data: LoginFormData) => {
    "use server";
    console.log("Login data : ", data);
  };

  return <LoginFormClient onSubmit={onSubmit} />;
};

LoginForm.displayName = "LoginForm";

export default LoginForm;
