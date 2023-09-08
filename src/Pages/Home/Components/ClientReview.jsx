import React from "react";
import ClientReviewBox from "../../../Components/Box/ClientReviewBox";

export default function ClientReview() {
  return (
    <>
      <section id="client" class="client">
        <h1>Our resent clients reviews</h1>
        <h2>
          <a href="#">See all</a>
        </h2>
        <div class="all_review_box">
          <ClientReviewBox />
          <ClientReviewBox />
          <ClientReviewBox />
          <ClientReviewBox />
        </div>
      </section>
    </>
  );
}
