import React from "react";

export default function ServiceBox({ servicenumber, servicename, servicedes }) {
  return (
    <>
      <div class="service_box">
        <h1>{servicenumber}</h1>
        <h2>{servicename}</h2>
        <h3>{servicedes}</h3>
      </div>
    </>
  );
}
