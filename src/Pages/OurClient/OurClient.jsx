import React from "react";
import PageHeader from "../../Components/Box/PageHeader";
import ClientReviewBox from "../../Components/Box/ClientReviewBox";

export default function OurClient() {
  return (
    <>
      <PageHeader pagename={"our client reviews"} />
      <div className="text-center">
        <p className="text-white p-4">
          Creative team is a team of individuals supporting a company or
          organization with their creative skills
        </p>
        <ClientReviewBox />
        <ClientReviewBox />
        <ClientReviewBox />
        <ClientReviewBox />
        <ClientReviewBox />
        <ClientReviewBox />
      </div>
    </>
  );
}
