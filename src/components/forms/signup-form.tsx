import dynamic from "next/dynamic";
import { SignupSkeleton } from "../skeletons";

const SignupFormClient = dynamic(() => import("./SignupFormClient"), {
  loading: () => <SignupSkeleton />,
});

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
