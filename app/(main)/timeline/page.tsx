import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/logoutButton";
const Timeline = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");
  if (!token?.value) {
    redirect("/login");
  }
  const data = await fetch(`http://localhost:3000/exploredata`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
  const logUserOut = async () => {
    "use server";
    cookies().delete("jwt");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl self-center"></div>
      <h1>THIS IS TIMELINE SCREEN EXPERIMENTING NAVIGATION UPON loggin in </h1>
      <LogoutButton logUserOut={logUserOut} />
    </div>
  );
};

export default Timeline;
