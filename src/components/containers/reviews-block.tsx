import React from "react";
import { GridContainer } from "../layout";
import { Carousel, Review } from "../common";
interface Props {
  reviews: Review[];
}

const ReviewsBlock: React.FC<Props> = ({ reviews }) => {
  return (
    <Carousel
      items={reviews.map((review) => (
        <Review key={review.id} review={review} className="h-full" />
      ))}
    />
  );
};

export default ReviewsBlock;
