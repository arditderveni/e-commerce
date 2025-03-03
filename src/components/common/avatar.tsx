import React from "react";
import { AvatarComp, AvatarFallback, AvatarImage } from "../ui";
import { cn, userInitials } from "@/lib/utils";
interface Props {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Avatar component that displays a user's avatar image.
 * If the image fails to load, it falls back to displaying the user's initials.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.src - The source URL of the avatar image.
 * @param {string} props.alt - The alt text for the avatar image, typically the user's name.
 * @param {string} [props.className] - Additional class names to apply to the avatar component.
 * @returns {JSX.Element} The rendered Avatar component.
 */
const Avatar: React.FC<Props> = ({ src, alt, className }) => {
  return (
    <AvatarComp className={cn("h-8 w-8 rounded-lg", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="rounded-lg">
        {userInitials(alt)}
      </AvatarFallback>
    </AvatarComp>
  );
};

export default Avatar;
