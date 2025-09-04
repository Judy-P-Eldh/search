"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export default function PaginationButton({
  paramKey,
  value,
  enabled = true,
  className,
  children,
}: {
  paramKey: string;
  value: string;
  enabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams.toString());
  params.set(paramKey, value);

  return enabled ? (
    <Link
      className={
        className +
        " bg-neutral-500 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-900 cursor-pointer"
      }
      href={`${pathname}?${params}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={
        className +
        " text-neutral-400 bg-neutral-200 dark:bg-neutral-400 pointer-none dark:text-neutral-600 "
      }
      type="button"
      disabled
      aria-disabled="true"
    >
      {children}
    </button>
  );
}
 