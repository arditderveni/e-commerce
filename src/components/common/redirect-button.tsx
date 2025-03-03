"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

/**
 * RedirectButton component is a reusable button that redirects the user to a specified route when clicked.
 *
 * @component
 * @param {RedirectButtonProps} props - The properties for the RedirectButton component.
 * @param {string} props.route - The route to which the user will be redirected.
 * @param {string} props.title - The text to be displayed on the button.
 * @param {string} [props.className] - Optional additional CSS class names to style the button.
 *
 * @example
 * <RedirectButton route="/home" title="Go Home" className="custom-class" />
 */
const RedirectButton: React.FC<RedirectButtonProps> = ({
  route,
  title,
  className,
}) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(route)} className={className}>
      {title}
    </Button>
  );
};

export default RedirectButton;
