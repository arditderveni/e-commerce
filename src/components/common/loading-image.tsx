import React, { ComponentProps, FC } from "react";
import { ImageSkeleton } from "../skeletons";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A component that wraps an image with a suspense fallback.
 * Displays a skeleton image while the actual image is loading.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.width - The width of the image.
 * @param props.height - The height of the image.
 * @param props.alt - The alt text for the image.
 * @returns The LoadingImage component.
 */
const LoadingImage: FC<ComponentProps<typeof Image>> = ({
  width,
  height,
  alt,
  src,
  ...props
}) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="relative" style={{ width, height }}>
      {!loaded && <ImageSkeleton style={{ width, height }} />}
      <Image
        {...props}
        alt={alt}
        src={src}
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};
export default LoadingImage;
