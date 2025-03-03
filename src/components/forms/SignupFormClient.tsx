"use client";
import { dynamicFormRender } from "@/lib/utils";
import { signupSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

/**
 * SignupFormClient component renders a signup form with various input fields.
 * It uses react-hook-form for form handling and validation with Zod schema.
 *
 * @component
 * @param {SignupFormProps} props - The props for the SignupFormClient component.
 * @param {function} props.onSubmit - The function to handle form submission.
 *
 * @returns {JSX.Element} The rendered signup form component.
 *
 * @example
 * <SignupFormClient onSubmit={handleSignup} />
 *
 * @typedef {Object} SignupFormProps
 * @property {function} onSubmit - The function to handle form submission.
 *
 * @typedef {Object} SignUpFormData
 * @property {string} name - The user's first name.
 * @property {string} surname - The user's surname.
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 * @property {string} confirmPassword - The user's password confirmation.
 * @property {Date} birthDate - The user's birth date.
 */
const SignupFormClient: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: new Date(),
    },
  });

  const inputs = [
    {
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      className: "w-full md:w-1/2 md:pr-2", // Add this line
    },
    {
      name: "surname",
      type: "text",
      label: "Surname",
      placeholder: "Enter your surname",
      required: true,
      className: "w-full md:w-1/2 md:pl-2", // Add this line
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      className: "w-full mt-2", // Add this line
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
      className: "w-full mt-2", // Add this line
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      required: true,
      className: "w-full mt-2", // Add this line
    },
    {
      name: "birthDate",
      type: "date",
      label: "Birth Date",
      placeholder: "Enter your birth date",
      required: true,
      className: "w-full mt-2", // Add this line
    },
  ];

  return dynamicFormRender({
    form,
    inputs,
    submitText: "Sign Up",
    submitHandler: onSubmit,
    className: "shadow-md p-4 flex flex-row max-w-[400px] flex-wrap", // Add space-y-4 for vertical spacing
  });
};

SignupFormClient.displayName = "SignupFormClient";

export default SignupFormClient;
