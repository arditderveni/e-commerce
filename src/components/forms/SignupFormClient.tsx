"use client";
import { dynamicFormRender } from "@/lib/utils";
import { signupSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
