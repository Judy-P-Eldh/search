import { ChevronLeft, ChevronLeftCircle, ChevronRight } from "lucide-react";
import PaginationButton from "./paginationbutton";

export function PaginationNav({
  total,
  limit,
  page,
}: {
  total: number;
  limit: number;
  page: number;
}) {
  const totalPages = Math.ceil(total / limit);
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className="my-8 flex gap-4 items-center justify-center"
    >
      {/* see if the page is already at 0 - if so, render the link as a disabled button instead */}
      <PaginationButton
        className={`p-2 rounded flex items-center`}
        paramKey="page"
        value={`${page - 1}`}
        enabled={page - 1 > 0}
      >
        <ChevronLeftCircle />
        <ChevronLeft size={20} /> Previous
      </PaginationButton>
      {/* {page - 1 > 0 ? (
        <Link
          className="bg-neutral-200 p-2 rounded cursor-pointer dark:text-neutral-900 flex items-center"
          href={`?page=${page - 1}`}
        >
          
        </Link>
      ) : (
        <button
          className="bg-neutral-500 p-2 rounded cursor-pointer dark:text-neutral-900 flex items-center"
          type="button"
          disabled
          aria-disabled="true"
        >
          <ChevronLeft size={20} /> Previous
        </button>
      )} */}
      {/* If we want we can display current/total pages */}
      {/* <div>
          {page}/{totalPages}
        </div> */}
      {/* or render a button for each page */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          //           <Link
          //   key={i}
          //   className={`py-2 px-4 rounded cursor-pointer dark:text-neutral-900 bg-neutral-200 ${
          //     i + 1 === page && "outline outline-offset-2 outline-neutral-200"
          //   }`}
          //   href={`?page=${i + 1}`}
          // >
          //   {i + 1}
          // </Link>
          <PaginationButton
            key={i}
            paramKey="page"
            value={`${i + 1}`}
            className={`py-2 px-4 rounded`}
            enabled={i + 1 !== page} // Disable if it's the current page
          >
            {i + 1}
          </PaginationButton>
          // <Link
          //   key={i}
          //   className={`py-2 px-4 rounded cursor-pointer dark:text-neutral-900 bg-neutral-200 ${
          //     i + 1 === page && "outline outline-offset-2 outline-neutral-200"
          //   }`}
          //   href={`?page=${i + 1}`}
          // >

          // </Link>
        ))}
      </div>
      {/* see if the page is higher than pages divided with items per page - if so, render the link as a disabled button */}
      <PaginationButton
        className={`p-2 rounded flex items-center`}
        paramKey="page"
        value={`${page + 1}`}
        enabled={page + 1 <= totalPages}
      >
        Next
        <ChevronRight size={20} />
      </PaginationButton>
      {/* {page + 1 <= totalPages ? (
        <Link
          className="bg-neutral-200 p-2 rounded cursor-pointer dark:text-neutral-900 flex items-center"
          href={`?page=${page + 1}`}
        >
          Next
          <ChevronRight size={20} />
        </Link>
      ) : (
        <button
          className="bg-neutral-500 p-2 rounded cursor-pointer dark:text-neutral-900 flex items-center"
          type="button"
          disabled
          aria-disabled="true"
        >
          Next
          <ChevronRight size={20} />
        </button>
      )} */}
    </nav>
  );
}
 