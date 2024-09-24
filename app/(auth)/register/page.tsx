import React from "react";
import RegisterForm from "@/app/components/registerForm";

const Register = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl self-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
