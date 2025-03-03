import dynamic from "next/dynamic";
import { SignupSkeleton } from "../skeletons";

const SignupFormClient = dynamic(() => import("./SignupFormClient"), {
  loading: () => <SignupSkeleton />,
});

/**
 * SignupForm component handles the user signup process.
 *
 * This component renders a signup form and handles form submission.
 *
 * @component
 * @returns {JSX.Element} The rendered signup form component.
 *
 * @example
 * // Usage example:
 * <SignupForm />
 *
 * @remarks
 * The `onSubmit` function is an asynchronous function that logs the signup data
 * and returns a resolved promise.
 *
 * @async
 * @function onSubmit
 * @param {SignUpFormData} data - The data submitted from the signup form.
 * @returns {Promise<void>} A promise that resolves when the submission is complete.
 */
const SignupForm: React.FC = () => {
  const onSubmit = async (data: SignUpFormData) => {
    "use server";
    console.log("Signup data : ", data);
    return Promise.resolve();
  };

  return <SignupFormClient onSubmit={onSubmit} />;
};

SignupForm.displayName = "SignupForm";

export default SignupForm;
