import React from "react";
import { SignUp } from "../components/SignUp/SignUp";

function SignUpPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpPage;
