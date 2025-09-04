'use client'
import Link from 'next/link';

export default function BasicPagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
  return (
    <nav>
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`}>Föregående</Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <Link key={i+1} href={`?page=${i+1}`}>{i+1}</Link>
      ))}
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`}>Nästa</Link>
      )}
    </nav>
  );
}
