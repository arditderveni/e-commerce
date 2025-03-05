import React, { ComponentProps, FC, Suspense } from "react";
import { ImageSkeleton } from "../skeletons";
import Image from "next/image";

/**
 * A component that wraps an image with a suspense fallback.
 * Displays a skeleton image while the actual image is loading.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.width - The width of the image.
 * @param props.height - The height of the image.
 * @returns The LoadingImage component.
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
