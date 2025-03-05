import { cn } from "@/lib/utils";
import React from "react";
import Card from "./card";
import { Avatar, StarRating } from "../common";

interface Props {
  review: Review;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

/**
 * Review component displays a user's review including their name, avatar, rating, date, comment, and description.
 *
 * @component
 * @param props - The props for the Review component.
 * @param props.review - The review object containing user details and review content.
 * @param props.review.user - The user object containing name and avatar.
 * @param props.review.user.name - The name of the user.
 * @param props.review.user.avatar - The URL of the user's avatar image.
 * @param props.review.rating - The rating given by the user.
 * @param props.review.date - The date when the review was posted.
 * @param props.review.comment - The comment provided by the user.
 * @param props.review.description - The detailed description of the review.
 * @param props.className - Additional class names to style the component.
 * @returns The rendered Review component.
 */
const Review: React.FC<Props> = ({ review, className }) => {
  const {
    user: { name, avatar },
    rating,
    date,
    comment,
    description,
  } = review;

  return (
    <Card
      className={cn("review", className)}
      title={name}
      headerVariant="rtl"
      Icon={() => Avatar({ src: avatar, alt: name })}
      footer={<p>{date.toDateString()}</p>}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center align-middle gap-2">
          <h1 className="text-lg font-semibold">{comment}</h1>
          <StarRating rating={rating} ratable={false} />
        </div>

        <p className="">{description}</p>
      </div>
    </Card>
  );
};

export default Review;
