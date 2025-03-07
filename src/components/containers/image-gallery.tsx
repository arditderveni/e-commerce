import { cn } from "@/lib/utils";
import React, { useMemo, useState } from "react";
import { LoadingImage } from "../common";
// import { ImageSkeleton } from "../skeletons";

type Image = { src: string; name: string; id: string };

interface Props {
  images: Image[];
  className?: string;
}

/**
 * ImageGallery component displays a gallery of images with a main displayed image and a list of smaller images.
 * Clicking on a smaller image will update the main displayed image.
 *
 * @param images - An array of image objects to be displayed in the gallery.
 * @param className - Additional class names to style the component.
 *
 * @returns A JSX element representing the image gallery.
 */
const ImageGallery: React.FC<Props> = ({ images, className }) => {
  const [displayed, setDisplayed] = useState<Image>(images[0]);

  const smallImages = useMemo(() => {
    return images.map(
      ({ src, id, name }) =>
        id !== displayed.id && (
          <div className="flex-1" key={id}>
            <LoadingImage
              key={id}
              src={src}
              alt={name}
              fill
              className="object-contain cursor-pointer"
              onClick={() => setDisplayed({ src, id, name })}
            />
          </div>
        )
    );
  }, [images, displayed]);

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <div className="flex flex-col gap-4 justify-between w-[20%]">
        {smallImages}
      </div>
      <div className="flex-1">
        <LoadingImage
          src={displayed.src}
          alt={displayed.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
