import React from "react";
import PageHeader from "../../Components/Box/PageHeader";
import FAWBox from "../../Components/Box/FAWBox";

export default function FAQ() {
  return (
    <>
      <PageHeader pagename={"FAQ"} />
      <div className="p-4">
        <FAWBox
          question={"What is your name?"}
          answer={"My name is MD Naiem Hosen?"}
        />
      </div>
    </>
  );
}
