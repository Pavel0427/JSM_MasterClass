import React from "react";
import ClientSample from "../clientSample/page";

const WhereToRender = () => {
  console.log("where to render?");
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5rem",
        minHeight: "100vh",
      }}
    >
      <h2>Welcome</h2>
      <br />
      <h4>--------</h4>
      <ClientSample></ClientSample>
    </main>
  );
};

export default WhereToRender;
