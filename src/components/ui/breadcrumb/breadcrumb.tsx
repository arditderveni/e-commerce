import { FC } from "react";

const Breadcrumb: FC<BreadcrumbProps> = ({ ref, ...props }) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
