import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="sign-in">
      <div className="flex justify-center items-center h-full">
        <div className="bg-mainColor w-5/12 h-fit py-16 rounded shadow-lg flex flex-col justify-center  ">
          <div className="text-center space-y-2">
            <p className="text-3xl font-semibold">Craete an account</p>
          </div>
          <div className="flex flex-col items-center mt-8 space-y-6">
            <Input title="email" className="w-96" />
            <Input title="display name" className="w-96" />
            <Input title="username" className="w-96" />
            <Input title="password" type="password" className="w-96" />
            <Button className="w-96">Continue</Button>
          </div>
          <p className="tex w-7/12 mx-auto text-sm text-secondTextColor tracking-wider py-1.5">
            <Link
              href={"/sign-in"}
              className="transition-all text-secondaryColor hover:underline"
            >
              Already have a account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
