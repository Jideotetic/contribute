import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function CustomPagination({ currentPage, totalPages, onPageChange }) {
  const getPages = () => {
    const pages = [];
    const delta = 1; // Number of pages to show on either side of the current page

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1); // Always show first page

    if (left > 2) {
      pages.push("left-ellipsis"); // Left ellipsis
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push("right-ellipsis"); // Right ellipsis
    }

    if (totalPages > 1) {
      pages.push(totalPages); // Always show last page
    }

    return pages;
  };

  return (
    <Pagination className="flex justify-end">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "cursor-not-allowed bg-[#f0f4fd83] text-[#8791a78e] hover:bg-[#f0f4fd83] hover:text-[#8791a78e]"
                : "bg-[#F0F4FD] text-[#8791A7] hover:bg-[#F0F4FD]"
            }`}
            href="#"
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
                return;
              }
              onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {getPages().map((page, index) => (
          <PaginationItem key={index}>
            {page === "left-ellipsis" || page === "right-ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={`${page === currentPage ? "cursor-not-allowed bg-[#2F0FD1] text-white hover:bg-[#2F0FD1] hover:text-white" : "bg-[#F0F4FD] text-[#8791A7] hover:bg-[#F0F4FD]"}`}
                href="#"
                isActive={page === currentPage}
                onClick={(e) => {
                  if (page === currentPage) {
                    e.preventDefault();
                    return;
                  }

                  onPageChange(page);
                }}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "cursor-not-allowed bg-[#f0f4fd83] text-[#8791a78e] hover:bg-[#f0f4fd83] hover:text-[#8791a78e]"
                : "bg-[#F0F4FD] text-[#8791A7] hover:bg-[#F0F4FD]"
            }`}
            href="#"
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
                return;
              }

              onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default CustomPagination;
