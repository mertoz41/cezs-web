"use client";
import React from "react";
// import { cookies } from "next/headers";

const LogoutButton = ({ logUserOut }: { logUserOut: any }) => {
  //   const logUserOut = async () => {
  //     "use server";
  //     cookies().delete("jwt");
  //   };
  return <button onClick={() => logUserOut({})}>log out</button>;
};

export default LogoutButton;
