import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui";

interface Props {
  className?: string;
  activeFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

/**
 * ActiveFilters component displays a list of active filters and allows users to remove individual filters or clear all filters.
 *
 * @component
 * @param className - Additional class names for styling the component.
 * @param activeFilters - Array of active filters to be displayed.
 * @param setActiveFilters - Function to update the active filters state.
 *
 * @example
 * const [filters, setFilters] = useState<string[]>(['filter1', 'filter2']);
 *
 * <ActiveFilters
 *   className="custom-class"
 *   activeFilters={filters}
 *   setActiveFilters={setFilters}
 * />
 */
const ActiveFilters: React.FC<Props> = ({
  className,
  activeFilters,
  setActiveFilters,
}) => {
  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div className={cn("space-y-3", className)}>
      {activeFilters.length ? (
        <Button onClick={() => setActiveFilters([])}>Clear All</Button>
      ) : null}
      <div className="flex flex-wrap gap-2 align-middle">
        {activeFilters.map((filter, index) => (
          <div
            key={index}
            className="bg-accent rounded-md px-3 py-1 flex align-middle items-center gap-2"
          >
            <XIcon
              onClick={() => removeFilter(filter)}
              strokeWidth={1}
              width={18}
              height={18}
              className="cursor-pointer"
            />
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
