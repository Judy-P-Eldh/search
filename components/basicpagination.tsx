'use client'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import Link from 'next/link';

export default function BasicPagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
  return (
    <nav className='flex justify-center mb-16 gap-4'>
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`}><ChevronLeftCircle size={50}/></Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => (
        <Link className='hidden md:flex border-2 rounded p-4 font-bold' key={i+1} href={`?page=${i+1}`}>{i+1}</Link>
      ))}
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`}><ChevronRightCircle size={50}/></Link>
      )} 
    </nav>
  );
}
