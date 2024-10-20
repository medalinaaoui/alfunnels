import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default Page;
