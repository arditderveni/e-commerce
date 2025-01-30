"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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
