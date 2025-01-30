"use client";

import { cn } from "@/lib/utils";
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  ratable,
  className,
  ref,
}) => {
  const [value, setValue] = useState(ratable ? 0 : rating);
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    value,
    setValue,
  }));

  const handleMouseOver = useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      if (!ratable || !containerRef.current) return;

      const stars = containerRef.current.querySelectorAll("svg");
      const hoveredIndex = Array.from(stars).indexOf(event.currentTarget);

      stars.forEach((star, index) => {
        if (index <= hoveredIndex) {
          star.classList.add("text-yellow-400", "scale-105");
        } else {
          star.classList.remove("text-yellow-400", "scale-105");
        }
      });
    },
    [ratable, containerRef]
  );

  const handleMouseOut = useCallback(() => {
    if (!ratable || !containerRef.current) return;

    const stars = containerRef.current.querySelectorAll("svg");
    stars.forEach((star) => {
      star.classList.remove("text-yellow-400", "scale-105");
    });
  }, [ratable, containerRef]);

  const handleClick = (index: number) => {
    if (ratable) {
      setValue(index + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex items-center space-x-1 ${className} ${
        ratable ? "cursor-pointer" : ""
      }`}
    >
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={cn(
            "w-4 h-4 transition-all duration-300",
            index < value ? "text-yellow-400" : "text-gray-300",
            ratable ? "cursor-pointer" : ""
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick(index)}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.446 4.435a1 1 0 00.95.69h4.9c.969 0 1.371 1.24.588 1.81l-3.97 2.88a1 1 0 00-.364 1.118l1.446 4.435c.3.921-.755 1.688-1.54 1.118L10 15.434l-3.97 2.88c-.784.57-1.84-.197-1.54-1.118l1.446-4.435a1 1 0 00-.364-1.118L1.6 9.862c-.784-.57-.38-1.81.588-1.81h4.9a1 1 0 00.95-.69L9.049 2.927z"></path>
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
