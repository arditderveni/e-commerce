import { cn } from "@/lib/utils";
import React from "react";
import Card from "./card";
import { Avatar, StarRating } from "../common";

interface Props {
  review: Review;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

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
