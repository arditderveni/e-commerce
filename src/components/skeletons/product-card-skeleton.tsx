import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ImageSkeleton from "./image-skeleton";
import { Heart } from "lucide-react";

function SkeletonCard({ className }: { className?: string }) {
  return (
    <Card className={cn("border-1 border-product-border", className)}>
      <CardHeader className="border-none justify-between align-middle">
        <Skeleton className="w-20 h-8 bg-accent" />
        <Skeleton className="w-8 h-8">
          <Heart className="stroke-accent w-full h-full" />
        </Skeleton>
      </CardHeader>

      <CardContent className="w-full">
        <ImageSkeleton className="w-[300px] h-[300px] mx-auto" />
        <div className="flex align-middle justify-between mt-4">
          <Skeleton className="w-20 h-6 bg-accent" />
          <Skeleton className="w-16 h-6 bg-accent" />
          <Skeleton className="w-12 h-6 bg-accent" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Skeleton className="w-20 h-8 bg-accent" />
        <Skeleton className="w-16 h-8 bg-accent" />
        <Skeleton className="w-24 h-8 bg-accent" />
      </CardFooter>
    </Card>
  );
}

export default SkeletonCard;
