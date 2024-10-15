import React from "react";
import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";

const page = async () => {
  const agencyId = await verifyAndAcceptInvitation();

  console.log(agencyId);

  const user = await getAuthUserDetails();

  if (!user) {
  }

  return <div>page</div>;
};

export default page;
