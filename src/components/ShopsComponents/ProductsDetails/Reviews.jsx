import React, { useRef, useState } from "react";
import "./Reviews.css";

import { toast } from "react-toastify";
const initialReviews = [
  {
    userName: "Jhon Doe",
    text: "Lorem ipsum dolor sit amet.",
    rating: 4,
  },
  {
    userName: "Jane Smith",
    text: "Consectetur adipiscing elit.",
    rating: 5,
  },
];
const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(null);
  const reviewMsg = useRef("");
  const reviewUser = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    setReviews([...reviews, reviewObj]);
    toast.success("Review submitted");
  };

  return (
    <aside>
      <div className="reviews__container">
        {reviews.map((review) => (
          <div key={review.userName}>
            <div className="reviews_card">
              <h4 className="name">{review.userName}</h4>
              <span className="rating"> {review.rating} (rating)</span>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
        <div className="reviews__form">
          <h4>Leave your experience</h4>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter name"
              className="input"
              ref={reviewUser}
            />
            <div className="reviews__star">
              <span onClick={() => setRating(1)}>
                1<i className="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setRating(2)}>
                2 <i className="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setRating(3)}>
                3 <i className="ri-star-s-fill"></i>
              </span>
              <span onClick={() => setRating(4)}>
                4 <i className="ri-star-s-fill"></i>
              </span>{" "}
              <span onClick={() => setRating(5)}>
                5<i className="ri-star-s-fill"></i>
              </span>
            </div>
            <textarea cols="80" rows="5" ref={reviewMsg}></textarea>
            <button className="btn__reviews">Submit</button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default Reviews;
