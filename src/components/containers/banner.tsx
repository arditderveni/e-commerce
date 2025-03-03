import { cn } from "@/lib/utils";
import React from "react";
import RedirectButton from "../common/redirect-button";

/**
 * Banner component that displays a banner with optional button.
 *
 * @param {string} className - Additional class names for the banner container.
 * @param {string} text - The text to display inside the banner.
 * @param {boolean} [button=false] - Flag to determine if a button should be displayed.
 * @param {string} [buttonText] - The text to display on the button (required if button is true).
 * @param {string} [path] - The path to redirect to when the button is clicked (required if button is true).
 *
 * @returns {JSX.Element} The rendered banner component.
 */
const Banner: React.FC<BannerProps> = ({
  className,
  text,
  button = false,
  buttonText,
  path,
}) => {
  return (
    <div
      className={cn(
        "w-full min-h-[36vh] bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center",
        className
      )}
    >
      {/* <Image /> */}
      <h1 className="text-white text-4xl font-bold">{text}</h1>
      {button && (
        <RedirectButton
          className="bg-white text-black px-4 py-2 rounded-lg"
          route={path as string}
          title={buttonText as string}
        />
      )}
    </div>
  );
};

export default Banner;
