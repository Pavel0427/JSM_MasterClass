"use client";

import React from "react";
import ServerSample from "../ServerSample/page";

const ClientSample = () => {
  console.log("I'm Client Component");

  return (
    <div>
      <p>This is a sample of a client component</p>
      <br />
      <h3>--------</h3>
      <ServerSample></ServerSample>
    </div>
  );
};

export default ClientSample;
