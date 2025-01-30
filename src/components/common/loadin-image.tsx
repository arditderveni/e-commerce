import React, { ComponentProps, FC, Suspense } from "react";
import { ImageSkeleton } from "../skeletons";
import Image from "next/image";

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
