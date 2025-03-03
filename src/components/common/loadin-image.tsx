import React, { ComponentProps, FC, Suspense } from "react";
import { ImageSkeleton } from "../skeletons";
import Image from "next/image";

/**
 * A component that wraps an image with a suspense fallback.
 * Displays a skeleton image while the actual image is loading.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @returns {JSX.Element} The LoadingImage component.
 */
const LoadingImage: FC<ComponentProps<typeof Image>> = ({
  width,
  height,
  ...props
}) => {
  return (
    <Suspense fallback={<ImageSkeleton style={{ width, height }} />}>
      <Image {...props} />
    </Suspense>
  );
};

export default LoadingImage;
