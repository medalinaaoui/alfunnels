import React from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getAuthUserDetails } from "@/lib/queries";

const page = async () => {
  const authUser = await currentUser();
  if (!authUser) return redirect("/sign-in");

  const user = await getAuthUserDetails();

  if (!user) {
  }

  return <div>page</div>;
};

export default page;
