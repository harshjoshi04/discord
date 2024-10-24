import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="flex justify-center items-center h-full">
        <div className="bg-mainColor w-5/12 h-fit py-16 rounded shadow-lg flex flex-col justify-center  ">
          <div className="text-center space-y-2">
            <p className="text-3xl font-semibold">Welcome back !</p>
            <p className="text-md text-textColor ">
              We're so excited to see you again!
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 space-y-6">
            <Input title="email or phone number" className="w-96" />
            <Input title="password" type="password" className="w-96" />
            <Button className="w-96">Log in</Button>
          </div>
          <p className="tex w-7/12 mx-auto text-sm text-secondTextColor tracking-wider py-1.5">
            Need an account?
            <Link
              href={"/sign-up"}
              className="transition text-secondaryColor hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
