"use client";
import React from "react";
interface TokenType {
  name: string;
  value: string;
}
const Experiment = ({ token }: { token: TokenType }) => {
  const getNewData = () => {
    fetch(`http://localhost:3000/exploredata`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
  };
  return (
    <div>
      <button onClick={() => getNewData()}>get new data</button>
    </div>
  );
};

export default Experiment;
