import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Filters from "./filters";
const Search = async () => {
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
  });
  let actualData = await data.json();

  actualData = JSON.parse(JSON.stringify(actualData));
  return (
    <div className="flex flex-col items-center w-2/3">
      <Filters data={actualData} />
    </div>
  );
};

export default Search;
