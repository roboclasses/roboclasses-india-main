import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface hrefType {
  hrefPrev: string;
  hrefNext: string;
}

export function PaginationDemo({ hrefPrev, hrefNext }: hrefType) {
  const isPrevDisabled = hrefPrev === `/blogs/trending-blogs/undefined`;
  const isNextDisabled = hrefNext === `/blogs/trending-blogs/undefined`;
  
  return (
    <Pagination>
      <PaginationContent className="flex flex-row items-center justify-between">
        <PaginationItem>
          <PaginationPrevious
            href={isPrevDisabled ? "undefined" : hrefPrev}
            className={`${isPrevDisabled ? "pointer-events-none opacity-50" : ""}`}
            aria-disabled={isPrevDisabled}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={isNextDisabled ? "undefined" : hrefNext}
            className={`${isNextDisabled ? "pointer-events-none opacity-50" : ""}`}
            aria-disabled={isNextDisabled}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
