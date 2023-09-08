import React from "react";

export default function ClientReviewBox() {
  return (
    <div className="inline-block w-5/12">
      <div class="">
        <div class="bg-slate-800 rounded-md m-4 p-4">
          <div class="image_box_review">
            <img src="image/client_photo/client1.jpg" alt="" />
            <h6>
              <span>From:</span>
              <a href="#">USA</a>
            </h6>
            <h6>
              <span>Total work with us:</span> <a href="">25</a>
            </h6>
            <h6>
              <span>Total spend:</span> <a href="#">2000$</a>
            </h6>
          </div>
          <div class="review_content">
            <h1>PR Miller</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores impedit dolorem nisi vel commodi fugit perferendis
              maiores, non delectus officiis iure explicabo tempora labore modi
              quaerat, architecto totam similique. Eligendi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
