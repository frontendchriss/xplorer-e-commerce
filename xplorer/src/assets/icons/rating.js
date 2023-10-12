import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(false);
  const handleRatingCheck = (e) => {
    setRating(e.target.value);
  };
  return (
    <>
      <Rating value={rating} onchange={handleRatingCheck} />
    </>
  );
};

export default Rating;
